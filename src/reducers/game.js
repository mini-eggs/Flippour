// @flow

import { getInitialState, checkComplete, checkLoss } from "./game.utilities";
import type { GameState, ActionType } from "./game.types";

export function GameReducer(
  state: GameState = getInitialState(),
  action: ActionType
) {
  if (state.fail && action.type !== "BEGIN_GAME") {
    return state;
  }

  switch (action.type) {
    case "FORCE_GAME_OVER": {
      return Object.assign({}, state, { fail: true });
    }

    case "NEXT_LEVEL": {
      const initialState = getInitialState();
      initialState.level = state.level + 1;
      initialState.score = state.score;
      initialState.time = (10 - Math.floor(state.level / 10)) * 1000;
      return initialState;
    }

    case "BEGIN_GAME": {
      return getInitialState();
    }

    case "SET_TIMER": {
      const newState: GameState = Object.assign({}, state, action.payload);
      return checkLoss(state, newState);
    }

    case "SQUARE_CLICK": {
      if (state.complete) {
        return state;
      }
      const { x, y } = action.payload;
      const currentSquares = state.squares.map(o => o);
      if (currentSquares[x][y].clicked) {
        // this square has already been clicked
        return state;
      }
      let score = state.score;
      currentSquares[x][y].clicked = true;
      if (currentSquares[x][y].color === state.goal) {
        currentSquares[x][y].status = true;
        score++;
      } else {
        score = score - 10;
      }
      const newState = Object.assign({}, state, {
        squares: currentSquares,
        complete: checkComplete(state.goal, currentSquares),
        score: score
      });
      return checkLoss(state, newState);
    }

    default: {
      return state;
    }
  }
}
