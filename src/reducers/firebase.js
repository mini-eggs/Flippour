// @flow

import type { FirebaseState, ActionType } from "./firebase.types";

const initialState: FirebaseState = {
  recentScores: [], // this is the current users recent scores
  highScores: [] // universal high scores
};

export const FirebaseReducer = (
  state: FirebaseState = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case "FIREBASE_SET_SCORES": {
      return Object.assign({}, state, action.payload);
    }

    default: {
      return state;
    }

  }
};
