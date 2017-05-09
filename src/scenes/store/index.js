import React, { PureComponent } from "react";
import { Alert } from "react-native";
import { Content } from "native-base";
import ActionSheet from "react-native-actionsheet";
import { FlippourError } from "../../classes/error";
import { Product } from "../../classes/product";
import { ProductInfo } from "../../components/";
import { AndroidBackDecorator } from "../../decorators/androidBack";
import { InfoDecorator } from "../../decorators/info";
import { FluxDecorator } from "../../decorators/flux";
import { SettingsDecorator } from "../../decorators/settings";
import { ProductDecorator } from "../../decorators/product";
import { SingleSquare } from "../start/squareButton";
import { StoreContainer, Products, Span, Row, Title, Empty } from "./styles";

@AndroidBackDecorator()
@ProductDecorator()
@SettingsDecorator()
@FluxDecorator()
@InfoDecorator()
export class StoreScene extends PureComponent {
  state = {
    showModal: false,
    product: null,
    buttonText: "Purchase",
    isAllowedToPurchase: true,
    options: ["Restore purchase", "Cancel"]
  };

  product = new Product();

  showProduct = product => async () => {
    try {
      const status = await this.product.alreadyPurchased(product);
      this.setState(() => {
        return {
          showModal: true,
          product: product,
          buttonText: status ? "Already Purchased" : "Purchase",
          isAllowedToPurchase: !status
        };
      });
    } catch (err) {
      // if (__DEV__) console.log(err);
    }
  };

  purchaseProduct = async () => {
    if (!this.state.isAllowedToPurchase) {
      this.closeProduct();
      return;
    }

    try {
      await this.product.purchase(this.state.product);
      this.closeProduct();
    } catch (err) {
      const aError = new FlippourError();
      if (aError.isFlippourError(err)) {
        Alert.alert("Error", err.message);
      } else {
        // this could simply be the user exiting during the checkout process
        // Alert.alert("Error", aError.generalError(), {
        //   text: "OK",
        //   onPress: () => this.closeProduct()
        // });
      }
    }
  };

  restoreProduct = async () => {
    try {
      await this.product.restore(this.state.product);
      Alert.alert("Complete", "Product has been restored.", [
        { text: "OK", onPress: () => this.closeProduct() }
      ]);
    } catch (err) {
      Alert.alert("Error", "You have not purchased this product.", [
        { text: "OK", onPress: () => this.closeProduct() }
      ]);
    }
  };

  closeProduct = () => {
    this.setState(() => {
      return {
        showModal: false,
        product: null,
        buttonText: "purchase",
        isAllowedToPurchase: true
      };
    });
  };

  showOptions = () => {
    this.ActionSheet.show();
  };

  handleOptions = index => {
    switch (index) {
      case 0: {
        this.restoreProduct();
        break;
      }
      case 1:
      default: {
        // user has cancelled
        break;
      }
    }
  };

  render() {
    const { container, title, buttonText } = this.props.settings.theme;
    const colors = this.props.gameColors[this.props.settings.themeName];

    // just testing for now
    const testProduct = this.props.products[0];

    return (
      <Content style={container}>
        <StoreContainer>
          <Title style={title}>STORE</Title>
          <Products>
            <Row>
              <SingleSquare
                onPress={this.showProduct(testProduct)}
                color={colors[testProduct.color]}
              >
                <Span style={{ color: buttonText.color }}>
                  {testProduct.title}
                </Span>
              </SingleSquare>
              <Empty />
            </Row>
            <Row>
              <Empty />
              <Empty />
            </Row>
          </Products>
        </StoreContainer>
        <ProductInfo
          buttonText={this.state.buttonText}
          show={this.state.showModal}
          product={this.state.product}
          back={this.closeProduct}
          complete={this.purchaseProduct}
          onRight={this.showOptions}
        />
        <ActionSheet
          ref={o => this.ActionSheet = o}
          options={this.state.options}
          cancelButtonIndex={this.state.options.length - 1}
          onPress={this.handleOptions}
        />
      </Content>
    );
  }
}
