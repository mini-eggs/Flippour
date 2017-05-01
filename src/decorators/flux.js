import React from "react";
import { Actions } from "react-native-router-flux";

function restartApplication() {
  RestartApplication.Restart();
}

export function FluxDecorator() {
  return DecoratedComponent => props => (
    <DecoratedComponent {...props} {...Actions} />
  );
}
