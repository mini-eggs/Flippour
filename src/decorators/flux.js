import React from "react";
import { Actions } from "react-native-router-flux";

export function FluxDecorator() {
  return DecoratedComponent =>
    props => <DecoratedComponent {...props} {...Actions} />;
}
