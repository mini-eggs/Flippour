import React, { PureComponent } from "react";
import { Modal } from "react-native";
import {
  Container,
  Header,
  Left,
  Right,
  Button,
  Body,
  Title,
  Input
} from "native-base";
import { AndroidBackDecorator } from "../../decorators/androidBack";
import { SettingsDecorator } from "../../decorators/settings";
import { FluxDecorator } from "../../decorators/flux";
import { Center, GameOverTitle, Spacer, CustomButton, Span } from "./styles";

@AndroidBackDecorator("hide")
@SettingsDecorator()
@FluxDecorator()
export class GameOver extends PureComponent {
  state = {
    username: ""
  };

  onChange = text => {
    this.setState(() => {
      return { username: text.replace(" ", "").toUpperCase() };
    });
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
      text
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

          <Center>

            <GameOverTitle>
              GAME OVER
            </GameOverTitle>

            <Spacer />

            <Input
              style={Object.assign({}, text, {
                flex: 0,
                textAlign: "center"
              })}
              multiline={false}
              placeholder={"Enter three letter username"}
              value={this.state.username}
              onChangeText={this.onChange}
              maxLength={3}
            />

            <Spacer />

            <CustomButton onPress={this.saveUsername} style={button}>
              <Span style={buttonText}>
                CONTINUE
              </Span>
            </CustomButton>

          </Center>

        </Container>
      </Modal>
    );
  }
}
