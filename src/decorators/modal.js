import React, { Component } from "react";
import { connect } from "react-redux";
import { ModalActions } from "../actions/";

function mapDispatchToProps(dispatch) {
  return {
    setMessage: msg => dispatch(ModalActions.setMessage(msg))
  };
}

export function ModalDecorator() {
  return DecoratedComponent => {
    return connect(null, mapDispatchToProps)(
      class extends Component {
        render() {
          return <DecoratedComponent {...this.props} />;
        }
      }
    );
  };
}
