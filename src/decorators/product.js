import React from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    ...state.ProductReducer
  };
}

export function ProductDecorator(state) {
  return DecoratedComponent => {
    return connect(mapStateToProps)(props => {
      return <DecoratedComponent {...props} />;
    });
  };
}
