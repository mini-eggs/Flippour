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
    saveSettings: settings => dispatch(SettingsActions.saveSettings(settings))
  };
}

export function SettingsDecorator() {
  return DecoratedComponent => {
    return connect(mapStateToProps, mapDispatchToProps)(function(props) {
      const LIGHT = props.theme === "Light";

      const settings = {
        ...props,
        themeName: props.theme,
        theme: {
          container: {
            backgroundColor: LIGHT ? "#f1f1f1" : "#2b1c19"
          },
          title: {
            color: LIGHT ? "#000" : "#fff"
          },
          button: {
            backgroundColor: LIGHT ? menuBlue : "#c3524c"
          },
          buttonText: {
            color: "#fff"
          },
          text: {
            color: LIGHT ? "#000" : "#fff"
          },
          modal: {
            backgroundColor: LIGHT ? "#e3e3e3" : "#c3524c"
          },
          modalText: {
            color: LIGHT ? "#000" : "#fff"
          }
        }
      };

      return <DecoratedComponent settings={settings} {...props} />;
    });
  };
}
