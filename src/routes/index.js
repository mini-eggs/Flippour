import React from "react";
import { Scene, Router, Actions, ActionConst } from "react-native-router-flux";
import { StartScene as Start } from "../scenes/start";
import { GameContainer as Game } from "../containers/game";
import { RecentContainer as Recent } from "../containers/recent";
import { HighScoresContainer as HighScores } from "../containers/highscores";
import { SettingsScene as Settings } from "../scenes/settings";

/*
      Okay, listen up.
      We're going to do something nasty.
      We're going to override `Actions.pop` with
      `Actions.start`. This is BAD, but react-native-router-flux,
      as awesome as it is, can't properly unmount a component
      and using InteractionManager.runAfterInteractions HURTS
      performance. I just don't give a hoot my dude.
*/

Actions.pop = () => Actions.start({ type: ActionConst.RESET });

export function RoutingLayer() {
  return (
    <Router>
      <Scene key="root">
        <Scene hideNavBar key="start" component={Start} />
        <Scene hideNavBar key="game" component={Game} panHandlers={null} />
        <Scene hideNavBar key="recent" component={Recent} />
        <Scene hideNavBar key="highscores" component={HighScores} />
        {/*note: settings key conflicts with a decorator props*/}
        <Scene hideNavBar key="settingsKey" component={Settings} />
      </Scene>
    </Router>
  );
}
