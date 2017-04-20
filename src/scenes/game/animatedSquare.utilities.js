// @flow

import React from "react";
import { Animated, View, Platform } from "react-native";

export const { parallel, sequence } = Animated;

type AnimatedViewType = {
  style: Object
};

export function AnimatedView(props: AnimatedViewType) {
  return (
    <Animated.View
      renderToHardwareTextureAndroid={true}
      shouldRasterizeIOS={true}
      {...props}
    />
  );
}

export function animate(
  toAnimate: Animated.Value,
  toValue: number,
  duration: number
) {
  return Animated.timing(toAnimate, {
    useNativeDriver: true,
    toValue: toValue,
    duration: duration
  });
}
