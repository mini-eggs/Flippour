// @flow

type SingleMessage = {
  time: number,
  text: string
};

export type MessagesType = Array<SingleMessage>;

export type StateType = {
  messages: MessagesType
};

export type ActionType = {
  type: string,
  payload: SingleMessage
};
