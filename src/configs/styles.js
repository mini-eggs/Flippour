import React, { PureComponent } from "react";
import { StatusBar } from "react-native";
import { connect } from "react-redux";
import { Container, StyleProvider, getTheme } from "native-base";
import variables from "../styles/theme";
import * as Colors from "../styles/variables";
import { SettingsDecorator } from "../decorators/settings";

@SettingsDecorator()
export class StylesLayer extends PureComponent {
  render = () => {
    return (
      <StyleProvider style={getTheme(variables)}>
        <Container style={this.props.settings.theme.container}>
          <StatusBar
            backgroundColor={this.props.settings.theme.modal.backgroundColor}
            barStyle={
              this.props.settings.themeName === "LIGHT"
                ? "dark-content"
                : "light-content"
            }
          />
          {this.props.children}
        </Container>
      </StyleProvider>
    );
  };
}
