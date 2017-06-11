import React, { PureComponent } from "react";
import { View } from "react-native";
import { StackNavigator } from "react-navigation";
import { SettingsDecorator } from "../decorators/settings";
import { StartScene as Start } from "../scenes/start";
import { GameContainer as Game } from "../containers/game";
import { HighScoresContainer as HighScores } from "../containers/highscores";
import { SettingsScene as Settings } from "../scenes/settings";
import { StoreScene as Store } from "../scenes/store";

function getScene(screen) {
  return {
    screen: screen,
    navigationOptions: {
      header: null
    }
  };
}

const Navigator = StackNavigator({
  Start: getScene(Start),
  Game: getScene(Game),
  HighScores: getScene(HighScores),
  Settings: getScene(Settings),
  Store: getScene(Store)
});

@SettingsDecorator()
export class RoutingLayer extends PureComponent {
  render() {
    const containerStyles = {
      backgroundColor: this.props.settings.theme.container.backgroundColor,
      flex: 1
    };
    return (
      <View style={containerStyles}>
        <Navigator />
      </View>
    );
  }
}
