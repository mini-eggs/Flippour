import React, { Component } from "react";
import { connect } from "react-redux";
import { menuBlue } from "../styles/variables";
import { SettingsActions } from "../actions/";

function mapStateToProps(state) {
  return {
    ...state.SettingsReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveSettings: settings => dispatch(SettingsActions.saveSettings(settings)),
    loadSettings: () => dispatch(SettingsActions.loadSettings())
  };
}

export function SettingsDecorator() {
  return DecoratedComponent => {
    return connect(mapStateToProps, mapDispatchToProps)(props => {
      const settings = {
        ...props,
        themeName: props.theme,
        theme: props.componentStyles[props.theme]
      };

      return <DecoratedComponent settings={settings} {...props} />;
    });
  };
}
