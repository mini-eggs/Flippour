import React, { Component } from "react";
import { View, Animated, Dimensions, Platform } from "react-native";
// import { SoundDecorator } from "../decorators/sound";
import { Text, Button } from "native-base";
import { connect } from "react-redux";
import { SettingsDecorator } from "../decorators/settings";
import { ModalActions } from "../actions/";

const styles = {
  ToastContainer: {
    position: "absolute",
    zIndex: 99,
    top: 0,
    width: Dimensions.get("window").width,
    alignItems: "stretch"
  },
  Background: {
    backgroundColor: "#c3524c",
    paddingTop: Platform.OS === "ios" ? 22 : 10,
    paddingBottom: 10
  },
  Text: {
    color: "white",
    textAlign: "center"
  }
};

// @SoundDecorator(["notification_in"])
@SettingsDecorator()
class ModalComponent extends Component {
  animation = {
    fadeAnim: new Animated.Value(0),
    positionAnim: new Animated.Value(-50)
  };

  state = {
    message: "No message has been entered",
    midTransition: false
  };

  start = () => {
    // this.props.sounds.notification_in.setCurrentTime(0.09);
    // this.props.sounds.notification_in.play();
    Animated.parallel([
      Animated.timing(this.animation.fadeAnim, {
        toValue: 1,
        duration: 150,
        useNativeDrier: true
      }),
      Animated.timing(this.animation.positionAnim, {
        toValue: 0,
        duration: 150,
        useNativeDrier: true
      })
    ]).start();
  };

  remove = () => {
    Animated.parallel([
      Animated.timing(this.animation.fadeAnim, {
        toValue: 0,
        duration: 150,
        useNativeDrier: true
      }),
      Animated.timing(this.animation.positionAnim, {
        toValue: -50,
        duration: 150,
        useNativeDrier: true
      })
    ]).start();
  };

  shouldComponentUpdate = () => {
    return !this.state.midTransition;
  };

  componentWillReceiveProps = nextprops => {
    if (nextprops.messages.length > 0 && !this.state.midTransition) {
      const message = nextprops.messages[nextprops.messages.length - 1];
      this.setState(
        () => {
          return { message: message.text, midTransition: true };
        },
        () => {
          this.start();
          setTimeout(() => {
            this.remove();
            this.props.removeMessage();
            this.setState(() => {
              return { midTransition: false };
            });
          }, message.time + 600);
        }
      );
    }
  };

  render = () => {
    const { modal, modalText } = this.props.settings.theme;

    const containerStyles = Object.assign({}, styles.ToastContainer, {
      opacity: this.animation.fadeAnim,
      transform: [{ translateY: this.animation.positionAnim }]
    });

    return (
      <Animated.View style={containerStyles}>
        <View style={Object.assign({}, styles.Background, modal)}>
          <Text style={Object.assign({}, styles.Text, modalText)}>
            {this.state.message}
          </Text>
        </View>
      </Animated.View>
    );
  };
}

const stateToProps = state => {
  return {
    messages: state.ModalReducer.messages
  };
};

const actionsToProps = dispatch => {
  return {
    removeMessage: () => dispatch(ModalActions.removeMessage())
  };
};

export const ModalLayer = connect(stateToProps, actionsToProps)(ModalComponent);
