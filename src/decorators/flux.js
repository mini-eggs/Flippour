import React from "react";
import { withNavigation, NavigationActions } from "react-navigation";

export function FluxDecorator() {
  return function(DecoratedComponent) {
    return withNavigation(function(props) {
      const Actions = {
        game: () => props.navigation.navigate("Game"),
        highscores: () => props.navigation.navigate("HighScores"),
        store: () => props.navigation.navigate("Store"),
        settingsKey: () => props.navigation.navigate("Settings"),
        pop: () => {
          props.navigation.dispatch(
            NavigationActions.reset({
              index: 0,
              actions: [NavigationActions.navigate({ routeName: "Start" })]
            })
          );
        }
      };

      return <DecoratedComponent {...props} {...Actions} />;
    });
  };
}
