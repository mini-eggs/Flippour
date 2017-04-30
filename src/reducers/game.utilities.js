// @flow

import { AsyncStorage } from "react-native";
import { saveGame } from "../actions/firebase/";
import type { GameState, SquareType } from "./game.types";

// this can change based on the user's purchases
let baseTime: number = 10;

// check if user has purchased 2.5 seconds level increase
async function checkUserPurchasedSettings() {
  try {
    const status = await AsyncStorage.getItem("extra_2_5_seconds_per_level");
    baseTime = 12.5;
    // if (status !== null) {
    //   baseTime = 12.5;
    // }
  } catch (err) {
    // not an issue
    // user does not have purchase
  }
}

checkUserPurchasedSettings();

function getColor() {
  const colors = ["red", "blue", "green", "orange"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function getSquares(x, y, color) {
  const outer = new Array(x).fill(0);
  const inner = new Array(y).fill(0);
  let chosenColorExists = false;

  const squares = outer.map(() => {
    return inner.map(() => {
      const squareColor = getColor();
      if (squareColor === color) {
        chosenColorExists = true;
      }
      return {
        clicked: false,
        color: getColor(),
        status: false
      };
    });
  });

  if (chosenColorExists) {
    return squares;
  } else {
    return getSquares(x, y, color);
  }
}

export function getInitialState() {
  const color = getColor();
  return {
    level: 1,
    score: 0,
    complete: false,
    fail: false,
    goal: color,
    squares: getSquares(5, 5, color),
    time: baseTime * 1000,
    speed: 1000
  };
}

export function checkComplete(goal: string, row: Array<Array<SquareType>>) {
  let count = 0;
  row.forEach(r => {
    r.forEach(c => {
      if (!c.clicked && c.color === goal) {
        count++;
      }
    });
  });
  return count > 0 ? false : true;
}

export function checkLoss(oldState: GameState, newState: GameState) {
  if (newState.time < 0 && !oldState.complete) {
    newState.time = 0;
    newState.fail = !oldState.complete;
  } else if (newState.time < 0) {
    newState.time = 0;
  } else if (newState.score < 0 && !oldState.complete) {
    newState.fail = true;
    newState.time = oldState.time;
  }

  if (newState.fail) {
    const { score, level } = newState;
    saveGame(score, level);
  }

  return newState;
}
