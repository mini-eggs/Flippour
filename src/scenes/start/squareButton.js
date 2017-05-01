import React, { PureComponent } from "react";
import { Animated, Alert } from "react-native";
import { Sound } from "../../classes/sound";
import { sequence, parallel, animate } from "../game/animatedSquare.utilities";
import { SettingsDecorator } from "../../decorators/settings";

const initial = {
  scale: 1,
  opacity: 1,
  rotate: 0
};

@SettingsDecorator()
export class SingleSquare extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      opacity: new Animated.Value(initial.opacity),
      scale: new Animated.Value(initial.scale),
      rotate: new Animated.Value(initial.rotate)
    };

    this.sounds = {
      continue: new Sound("tap_continue", props.settings.soundsEnabled)
    };

    this.animatingStatus = false;
  }

  componentWillReceiveProps({ settings }) {
    this.sounds = {
      continue: new Sound("tap_continue", settings.soundsEnabled)
    };
  }

  onPress = fn => () => {
    if (this.animatingStatus) return;
    this.sounds.continue.play();
    this.animatingStatus = true;
    parallel([
      sequence([
        animate(this.state.scale, 0.9, 125),
        animate(this.state.scale, 1, 125)
      ]),
      animate(this.state.rotate, 1.25, 850),
      animate(this.state.opacity, 0, 850)
    ]).start();
    setTimeout(fn, 850);
    setTimeout(this.reset, 1500);
  };

  reset = () => {
    this.animatingStatus = false;
    parallel([
      animate(this.state.opacity, initial.opacity, 1000),
      animate(this.state.rotate, initial.rotate, 0)
    ]).start();
  };

  render = () => {
    const { children, color, onPress } = this.props;

    const rotateYValue = this.state.rotate.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });

    const opacityValue = this.state.opacity.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    });

    return (
      <Animated.View
        onMoveShouldSetResponder={() => true}
        onStartShouldSetResponder={() => true}
        onResponderRelease={this.onPress(onPress)}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          margin: 6,
          borderRadius: 15,
          borderWidth: 2,
          borderBottomWidth: 0,
          borderRightWidth: 0,
          borderColor: "rgba(255, 255, 255, 0.15)",
          backgroundColor: color,
          opacity: opacityValue,
          transform: [
            { scale: this.state.scale },
            { rotateY: rotateYValue },
            { perspective: 1000 }
          ]
        }}
      >
        {children}
      </Animated.View>
    );
  };
}
