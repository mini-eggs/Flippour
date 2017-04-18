import React, { Component } from "react";
import { connect } from "react-redux";
import { FirebaseActions } from "../actions/";

function mapDispatchToProps(dispatch) {
  return {
    preload: () => {
      dispatch(FirebaseActions.getRecentScores());
      dispatch(FirebaseActions.getHighScores());
    }
  };
}

export function FirebaseDecorator() {
  return DecoratedComponent => {
    return connect(null, mapDispatchToProps)(
      class extends Component {
        componentWillMount() {
          this.props.preload();
        }
        componentWillReceiveProps() {
          this.props.preload();
        }
        render() {
          return <DecoratedComponent {...this.props} />;
        }
      }
    );
  };
}
