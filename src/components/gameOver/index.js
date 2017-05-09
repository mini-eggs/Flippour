import React, { PureComponent } from "react";
import { Modal, Dimensions } from "react-native";
import {
  Container,
  Header,
  Left,
  Right,
  Button,
  Body,
  Title,
  Input,
  Content
} from "native-base";
import { AndroidBackDecorator } from "../../decorators/androidBack";
import { SettingsDecorator } from "../../decorators/settings";
import { FluxDecorator } from "../../decorators/flux";
import { Center, GameOverTitle, Spacer, CustomButton, Span } from "./styles";

@SettingsDecorator()
@FluxDecorator()
@AndroidBackDecorator()
export class GameOver extends PureComponent {
  state = {
    username: ""
  };

  onChange = text => {
    this.setState(() => {
      return { username: text.replace(" ", "").toUpperCase() };
    });
  };

  exit = () => {
    this.props.pop();
  };

  saveUsername = () => {
    if (this.state.username) {
      this.props.saveSettings({
        username: this.state.username,
        themeName: this.props.settings.themeName,
        soundsEnabled: this.props.settings.soundsEnabled
      });
      this.props.pop();
    }
  };

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
            <Left />
            <Body>
              <Title style={{ color: modalText.color }}>
                Username
              </Title>
            </Body>
            <Right />
          </Header>
          <Content style={{ maxWidth: Dimensions.get("window").width }}>
            <Spacer />
            <Spacer />
            <GameOverTitle style={title}>
              GAME OVER
            </GameOverTitle>
            <Spacer />
            <Input
              style={Object.assign({}, text, {
                flex: 0,
                textAlign: "center",
                minWidth: 250
              })}
              multiline={false}
              placeholder={"Enter three letter username"}
              value={this.state.username}
              onChangeText={this.onChange}
              maxLength={3}
              returnKeyType="go"
              onBlur={this.saveUsername}
            />
            <Spacer />
            <Center>
              <CustomButton onPress={this.saveUsername} style={button}>
                <Span style={buttonText}>
                  Continue
                </Span>
              </CustomButton>
              <Spacer />
            </Center>
          </Content>
        </Container>
      </Modal>
    );
  }
}
