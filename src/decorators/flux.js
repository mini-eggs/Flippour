import React from "react";
import { Actions } from "react-native-router-flux";
import RestartApplication from "react-native-restart";

function restartApplication() {
  RestartApplication.Restart();
}

export function FluxDecorator() {
  return DecoratedComponent => props => (
    <DecoratedComponent
      {...props}
      {...Actions}
      restartApplication={restartApplication}
    />
  );
}
