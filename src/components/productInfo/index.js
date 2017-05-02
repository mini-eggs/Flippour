import React, { PureComponent } from "react";
import { Modal, Platform } from "react-native";
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
  ProductTitle,
  ProductDescription,
  PurchaseButton,
  Span,
  Center,
  ProductHeader
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
        transparent={false}
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
                Purchase
              </Title>
            </Body>
            {Platform.OS === "ios"
              ? <Right>
                  <Button
                    onPress={this.props.onRight}
                    style={{ backgroundColor: "transparent" }}
                  >
                    <Icon color={modalText.color} name="ios-more" />
                  </Button>
                </Right>
              : <Right />}
          </Header>
          <Content>
            <ProductHeader
              style={{
                backgroundColor: this.props.product
                  ? this.props.product.color
                  : "transparent"
              }}
            >
              <ProductTitle style={{ color: buttonText.color }}>
                {this.props.product ? this.props.product.title : null}
              </ProductTitle>
            </ProductHeader>
            <Spacer />
            <ProductDescription style={{ color: text.color }}>
              {this.props.product ? this.props.product.description : null}
            </ProductDescription>
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
