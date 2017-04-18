import React, { Component } from "react";
import { View, Animated, Dimensions, Easing } from "react-native";

const time = 250;

function getTranslateY(value) {
  return value.interpolate({
    inputRange: [0, 1],
    outputRange: [Dimensions.get("window").height, 0]
  });
}

export class FullModalComponent extends Component {
  state = {
    positionY: new Animated.Value(0),
    component: null
  };

  slideUp() {
    Animated.timing(this.state.positionY, {
      toValue: 1,
      duration: time
    }).start();
    return new Promise(resolve => setTimeout(resolve, time));
  }

  slideDown() {
    Animated.timing(this.state.positionY, {
      toValue: 0,
      duration: time
    }).start();
    return new Promise(resolve => setTimeout(resolve, time));
  }

  async componentWillReceiveProps({ component }) {
    if (component) {
      this.setState(
        () => {
          return { component: component };
        },
        this.slideUp
      );
    } else {
      await this.slideDown();
      this.setState(() => {
        return { component: component };
      });
    }
  }

  render() {
    return (
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: Dimensions.get("window").height,
          width: Dimensions.get("window").width,
          transform: [{ translateY: getTranslateY(this.state.positionY) }]
        }}
      >
        {this.state.component}
      </Animated.View>
    );
  }
}
