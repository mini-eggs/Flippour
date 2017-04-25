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
import { Center, GameOverTitle, Spacer, CustomButton, Span } from "./styles";

@AndroidBackDecorator("hide")
@SettingsDecorator()
export class GameOver extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      show: props.show,
      username: props.settings.username
    };
  }

  componentWillReceiveProps({ show }) {
    if (show != this.state.show) {
      setTimeout(() => {
        this.setState(() => {
          return { show: show };
        });
      }, 1000);
    }
  }

  hide = () => {
    this.setState(
      () => {
        return { show: false };
      },
      () => {
        setTimeout(() => {
          this.props.complete();
        }, 1000);
      }
    );
  };

  onChange = text => {
    this.setState(() => {
      return { username: text.replace(" ", "").toUpperCase() };
    });
  };

  saveUsername = () => {
    if (this.state.username) {
      this.props.saveSettings({ username: this.state.username });
      this.props.hide();
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
        visible={this.state.show}
        onRequestClose={this.hide}
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
              Game Over
            </GameOverTitle>

            <Spacer />

            <Input
              style={Object.assign({}, text, { flex: 0, textAlign: "center" })}
              multiline={false}
              placeholder={"Enter three letter username"}
              value={this.state.username}
              onChangeText={this.onChange}
              maxLength={3}
            />

            <Spacer />

            <CustomButton onPress={this.saveUsername} style={button}>
              <Span style={buttonText}>
                SAVE
              </Span>
            </CustomButton>

          </Center>

        </Container>
      </Modal>
    );
  }
}
