type SingleMessage = {
  time: number,
  text: string
};

export type MessagesType = Array<SingleMessage>;

export interface StateType {
  messages: MessagesType
}

export interface ActionType {
  type: string,
  payload: SingleMessage
}
