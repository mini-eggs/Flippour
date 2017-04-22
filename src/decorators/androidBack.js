import React, { Component } from "react";
import { BackHandler } from "react-native";

export function AndroidBackDecorator(onBackFunctionName) {
  return DecoratedComponent => class extends Component {
    ref = {};

    componentDidMount() {
      BackHandler.addEventListener("hardwareBackPress", this.onAndroidBack);
    }

    componentWillUnmount() {
      BackHandler.removeEventListener("hardwareBackPress", this.onAndroidBack);
    }

    onAndroidBack = () => {
      const func = this.ref[onBackFunctionName];
      if (typeof func === "function") {
        func();
      }
    };

    render() {
      return <DecoratedComponent ref={o => this.ref = o} {...this.props} />;
    }
  };
}
