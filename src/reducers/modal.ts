import { MessagesType, StateType, ActionType } from "./modal.types";

const initialState: StateType = {
  messages: []
};

export const ModalReducer = (
  state: StateType = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case "REMOVE_MESSAGE": {
      let messages: MessagesType = state.messages;
      messages.shift();
      return Object.assign({}, state, { messages: messages });
    }
    case "ADD_MESSAGE": {
      const messages = state.messages.concat([action.payload]);
      return Object.assign({}, state, { messages: messages });
    }
    default: {
      return state;
    }
  }
};
