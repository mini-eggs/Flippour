// @flow

import type { FullModalState, ActionType } from "./fullModal.types";

const initialState: FullModalState = {
  fullMessages: [] // components
};

export const FullModalReducer = (
  state: FullModalState = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case "REMOVE_FULL_MESSAGE": {
      let fullMessages = state.fullMessages;
      fullMessages.shift();
      return Object.assign({}, state, { fullMessages: fullMessages });
    }

    case "ADD_FULL_MESSAGE": {
      const fullMessages = state.fullMessages.concat([action.payload]);
      return Object.assign({}, state, { fullMessages: fullMessages });
    }

    default: {
      return state;
    }
  }
};
