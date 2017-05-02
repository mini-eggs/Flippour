import React, { PureComponent } from "react";
import { Alert } from "react-native";
import { Content } from "native-base";
import ActionSheet from "react-native-actionsheet";
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

    // console.log("purchase", this.state.product);

    try {
      await this.product.purchase(this.state.product);
      this.purhcaseCompleteAlert(this.state.product);
      // Alert.alert("Complete, user has purchased product");
    } catch (err) {
      // Alert.alert("Error or user cancelled.");
    } finally {
      this.closeProduct();
    }
  };

  restoreProduct = async () => {
    try {
      await this.product.restore(this.state.product);
      // Alert.alert("Complete, user has purchased product");
    } catch (err) {
      // Alert.alert("Error or user cancelled.");
    } finally {
      this.purchaseRestored(this.state.product);
      this.closeProduct();
    }
  };

  purchaseRestored(product) {
    setTimeout(() => {
      Alert.alert(`Complete! "${product.title}" has been restored.`);
    }, 1000);
  }

  purhcaseCompleteAlert(product) {
    setTimeout(() => {
      Alert.alert(`Congrats! "${product.title}" has been purchased.`);
    }, 1000);
  }

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
    const { container, title } = this.props.settings.theme;
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
                <Span>
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
