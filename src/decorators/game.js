import React, { Component } from "react";
import { connect } from "react-redux";
import { GameActions } from "../actions/";

function mapDispatchToProps(dispatch) {
  return {
    begin: () => dispatch(GameActions.beginGame()),
    forceGameOver: () => dispatch(GameActions.forceGameOver()),
    nextLevel: () => dispatch(GameActions.nextLevel()),
    onSquareClick: (x, y) => dispatch(GameActions.squareClick(x, y))
  };
}

export function GameDecorator() {
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
