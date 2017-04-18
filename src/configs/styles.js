import React, { PureComponent } from "react";
import { StatusBar } from "react-native";
import { connect } from "react-redux";
import { Container, StyleProvider, getTheme } from "native-base";
import variables from "../styles/theme";
import * as Colors from "../styles/variables";
import { SettingsDecorator } from "../decorators/settings";

@SettingsDecorator()
class StylesComponent extends PureComponent {
  render = () => {
    return (
      <StyleProvider style={getTheme(variables)}>
        <Container style={this.props.settings.theme.container}>
          <StatusBar
            backgroundColor={this.props.settings.theme.modal.backgroundColor}
            barStyle={this.props.theme === "LIGHT" ? "dark-content" : "light-content"}
          />
          {this.props.children}
        </Container>
      </StyleProvider>
    );
  }
}

export const StylesLayer = connect(state => {
  return {
    theme: state.SettingsReducer.theme
  };
})(StylesComponent);
