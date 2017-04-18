import React, { Component } from "react";
import { Animated, View } from 'react-native'

export function FadeInDecorator(time = 500, delay = 0) {
  let hasAlreadyFadedIn = false;

  return DecoratedComponent => {
    return class extends Component {
      opacity = new Animated.Value(hasAlreadyFadedIn ? 1 : 0);

      componentDidMount = () => {
        if (hasAlreadyFadedIn) return;

        setTimeout(() => {
          Animated.timing(this.opacity, {
            toValue: 1,
            duration: time
          }).start();
          hasAlreadyFadedIn = true;
        }, delay);
      }

      render = () => {
        return (
          <View style={Object.assign({}, { flex: 1 }, this.props.settings ? this.props.settings.theme.container : {})}>
            <Animated.View style={{ flex: 1, opacity: this.opacity }}>
              <DecoratedComponent {...this.props} />
            </Animated.View>
          </View>
        );
      }
    };
  }
}
