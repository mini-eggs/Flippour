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
    return connect(mapStateToProps, mapDispatchToProps)(function(props) {
      const LIGHT = props.theme === "Light";

      const theme = {
        container: {},
        title: {},
        button: {},
        buttonText: {},
        text: {},
        modal: {},
        modalText: {}
      };

      switch (props.theme) {
        case "Light": {
          theme.container.backgroundColor = "#f1f1f1";
          theme.title.color = "#000000";
          theme.button.backgroundColor = "#0a3869";
          theme.buttonText.color = "#ffffff";
          theme.text.color = "#000000";
          theme.modal.backgroundColor = "#e3e3e3";
          theme.modalText.color = "#000000";
          break;
        }
        case "Dark": {
          theme.container.backgroundColor = "#243447";
          theme.title.color = "#5fb3a7";
          theme.button.backgroundColor = "#1da1f2";
          theme.buttonText.color = "#ffffff";
          theme.text.color = "#5fb3a7";
          theme.modal.backgroundColor = "#1da1f2";
          theme.modalText.color = "#ffffff";
          break;
        }
        case "Oceanic": {
          theme.container.backgroundColor = "#1b2b34";
          theme.title.color = "#4ab3b3";
          theme.button.backgroundColor = "#9f80c5";
          theme.buttonText.color = "#ffffff";
          theme.text.color = "#4ab3b3";
          theme.modal.backgroundColor = "#9f90c5";
          theme.modalText.color = "#ffffff";
          break;
        }
        case "Solarized": {
          theme.container.backgroundColor = "#33343d";
          theme.title.color = "#e1946b";
          theme.button.backgroundColor = "#70bbc2";
          theme.buttonText.color = "#ffffff";
          theme.text.color = "#e1946b";
          theme.modal.backgroundColor = "#70bbc2";
          theme.modalText.color = "#ffffff";
          break;
        }
      }

      const settings = {
        ...props,
        themeName: props.theme,
        theme: theme
      };

      return <DecoratedComponent settings={settings} {...props} />;
    });
  };
}
