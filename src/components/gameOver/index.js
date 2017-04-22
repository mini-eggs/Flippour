import React, { PureComponent } from "react";
import { Modal } from "react-native";
import {
  Container,
  Header,
  Left,
  Right,
  Button,
  Body,
  Title
} from "native-base";
import { AndroidBackDecorator } from "../../decorators/androidBack";

@AndroidBackDecorator("hide")
export class GameOver extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      show: props.show
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

  render() {
    return (
      <Modal
        animationType={"slide"}
        visible={this.state.show}
        onRequestClose={this.hide}
      >
        <Container style={this.props.containerStyle}>
          <Header style={this.props.headerStyle}>
            <Left />
            <Body>
              <Title style={this.props.headerTextStyle}>
                Username
              </Title>
            </Body>
            <Right />
          </Header>
        </Container>
      </Modal>
    );
  }
}
