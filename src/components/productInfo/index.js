import React, { PureComponent } from "react";
import { Modal, Platform, Dimensions } from "react-native";
import {
  Container,
  Header,
  Left,
  Right,
  Body,
  Title,
  Content,
  Button,
  Text,
  Icon
} from "native-base";
import { AndroidBackDecorator } from "../../decorators/androidBack";
import { SettingsDecorator } from "../../decorators/settings";
import { FluxDecorator } from "../../decorators/flux";
import {
  Spacer,
  PurchaseButton,
  Span,
  Center,
  ProductSubtitle,
  ProductSquare,
  ProductImage,
  ProductBody
} from "./styles";

@SettingsDecorator()
@FluxDecorator()
@AndroidBackDecorator()
export class ProductInfo extends PureComponent {
  render() {
    const {
      container,
      modal,
      modalText,
      button,
      buttonText,
      text,
      title
    } = this.props.settings.theme;

    return (
      <Modal
        animationType={"slide"}
        visible={this.props.show}
        transparent={true}
      >
        <Container style={container}>
          <Header style={modal}>
            <Left>
              <Button
                style={{
                  shadowOffset: null,
                  shadowColor: null,
                  shadowRadius: null,
                  shadowOpacity: null,
                  color: modalText.color
                }}
                transparent
                onPress={this.props.back}
              >
                <Text style={{ color: modalText.color }}>Back</Text>
              </Button>
            </Left>
            <Body>
              <Title style={{ color: modalText.color }}>
                {this.props.product ? this.props.product.title : null}
              </Title>
            </Body>
            {Platform.OS === "ios"
              ? <Right>
                  <Button
                    onPress={this.props.onRight}
                    style={{ backgroundColor: "transparent" }}
                  >
                    <Icon style={{ color: modalText.color }} name="ios-more" />
                  </Button>
                </Right>
              : <Right />}
          </Header>
          <Content style={{ maxWidth: Dimensions.get("window").width }}>
            <Spacer />
            <ProductSubtitle style={title}>
              {this.props.product ? this.props.product.subtitle : null}
            </ProductSubtitle>
            <Spacer />
            <ProductSquare
              style={{
                borderRadius: 20,
                borderWidth: 4,
                borderBottomWidth: 0,
                borderRightWidth: 0,
                borderColor: "rgba(255, 255, 255, 0.15)",
                backgroundColor: this.props.product
                  ? this.props.product.color
                  : "transparent"
              }}
            >
              <ProductImage
                resizeMode="contain"
                source={this.props.product ? this.props.product.image : null}
              />
            </ProductSquare>
            <Spacer />
            <ProductBody style={title}>
              {this.props.product ? this.props.product.description : null}
            </ProductBody>
            <Spacer />
            <Center>
              <PurchaseButton onPress={this.props.complete} style={button}>
                <Span style={buttonText}>
                  {this.props.buttonText}
                </Span>
              </PurchaseButton>
            </Center>
            <Spacer />
            <Spacer />
          </Content>
        </Container>
      </Modal>
    );
  }
}
