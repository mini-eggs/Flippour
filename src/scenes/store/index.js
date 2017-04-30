import React, { PureComponent } from "react";
import { Alert } from "react-native";
import { Content } from "native-base";
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
    product: null
  };

  product = new Product();

  showProduct = product => () => {
    this.setState(() => {
      return {
        showModal: true,
        product: product
      };
    });
  };

  purchaseProduct = async () => {
    console.log("purchase", this.state.product);

    try {
      await this.product.purchase(this.state.product);
      Alert.alert("Complete, user has purchased product");
    } catch (err) {
      Alert.alert("Error or user cancelled.");
    } finally {
      this.closeProduct();
    }
  };

  closeProduct = () => {
    this.setState(() => {
      return {
        showModal: false,
        product: null
      };
    });
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
          show={this.state.showModal}
          product={this.state.product}
          back={this.closeProduct}
          complete={this.purchaseProduct}
        />
      </Content>
    );
  }
}
