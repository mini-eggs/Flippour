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
  let iosStatusbar;
  let titleFontColor;

  switch (theme) {
    case "Light": {
      highlight = "#0a3869";
      background = "#f1f1f1";
      iosStatusbar = "dark-content";
      titleFontColor = "#000000";
      break;
    }
    case "Dark": {
      highlight = "#1da1f2";
      background = "#243447";
      iosStatusbar = "light-content";
      titleFontColor = "#ffffff";
      break;
    }
    case "Oceanic": {
      highlight = "#9f80c5";
      background = "#1b2b34";
      iosStatusbar = "light-content";
      titleFontColor = "#ffffff";
      break;
    }
    case "Solarized": {
      highlight = "#70bbc2";
      background = "#33343d";
      iosStatusbar = "light-content";
      titleFontColor = "#ffffff";
      break;
    }
  }

  vars.titleFontColor = titleFontColor;
  vars.iosStatusbar = iosStatusbar;
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
  componentDidMount = () => {
    this.props.loadSettings();
  };

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
