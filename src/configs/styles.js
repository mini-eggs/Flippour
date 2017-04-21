import React, { PureComponent } from "react";
import { StatusBar } from "react-native";
import { connect } from "react-redux";
import { Container, StyleProvider, getTheme } from "native-base";
import variables from "../styles/theme";
import * as Colors from "../styles/variables";
import { SettingsDecorator } from "../decorators/settings";

function getUserTheme(vars, theme) {
  let highlight;
  let background;

  switch (theme) {
    case "Light": {
      highlight = "#0a3869";
      background = "#f1f1f1";
      break;
    }
    case "Oceanic":
    case "Solarized":
    case "Dark": {
      highlight = "#c3524c";
      background = "#2b1c19";
      break;
    }
  }

  // background
  vars.checkboxTickColor = background;

  // highlight
  vars.checkboxBgColor = highlight;
  vars.segmentActiveBackgroundColor = highlight;
  vars.segmentTextColor = highlight;
  vars.segmentBorderColor = highlight;
  vars.brandPrimary = highlight;
  vars.activeTab = highlight;
  vars.sTabBarActiveTextColor = highlight;
  vars.tabBarActiveTextColor = highlight;
  vars.topTabBarActiveTextColor = highlight;
  vars.topTabBarActiveBorderColor = highlight;

  return vars;
}

@SettingsDecorator()
export class StylesLayer extends PureComponent {
  render = () => {
    return (
      <StyleProvider
        style={getTheme(getUserTheme(variables, this.props.settings.themeName))}
      >
        <Container style={this.props.settings.theme.container}>
          <StatusBar
            backgroundColor={this.props.settings.theme.modal.backgroundColor}
            barStyle={
              this.props.settings.themeName === "Light"
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
