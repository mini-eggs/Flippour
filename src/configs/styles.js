import React, { PureComponent } from "react";
import { StatusBar } from "react-native";
import { connect } from "react-redux";
import { Container, StyleProvider, getTheme } from "native-base";
import variables from "../styles/theme";
import * as Colors from "../styles/variables";
import { SettingsDecorator } from "../decorators/settings";

function getUserTheme(theme, settings) {
  const { highlight, background, iosStatusbar, titleFontColor } = settings;
  theme.titleFontColor = titleFontColor;
  theme.iosStatusbar = iosStatusbar;
  theme.checkboxBgColor = highlight;
  theme.segmentActiveBackgroundColor = highlight;
  theme.segmentTextColor = highlight;
  theme.segmentBorderColor = highlight;
  theme.brandPrimary = highlight;
  theme.activeTab = highlight;
  theme.sTabBarActiveTextColor = highlight;
  theme.tabBarActiveTextColor = highlight;
  theme.topTabBarActiveTextColor = highlight;
  theme.topTabBarActiveBorderColor = highlight;
  return theme;
}

@SettingsDecorator()
export class StylesLayer extends PureComponent {
  componentDidMount = () => {
    this.props.loadSettings();
  };

  render = () => {
    const { settings, children } = this.props;
    const customVariables = settings.componentColors[settings.themeName];
    const theme = getUserTheme(variables, customVariables);

    return (
      <StyleProvider style={getTheme(theme)}>
        <Container style={settings.theme.container}>
          <StatusBar
            backgroundColor={settings.theme.modal.backgroundColor}
            barStyle={theme.iosStatusbar}
          />
          {children}
        </Container>
      </StyleProvider>
    );
  };
}
