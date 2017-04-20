import React, { Component } from "react";
import { connect } from "react-redux";
import { menuBlue } from "../styles/variables";

function mapStateToProps(state) {
  return {
    theme: state.SettingsReducer.theme
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeTheme: theme => alert(theme)
  };
}

export function SettingsDecorator() {
  return DecoratedComponent => {
    return connect(mapStateToProps, mapDispatchToProps)(function(props) {
      const LIGHT = props.theme === "LIGHT";

      const settings = {
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
