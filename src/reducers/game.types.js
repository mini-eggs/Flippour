// @flow

type PayloadType = {
  x: number,
  y: number
};

export type ActionType = {
  type: string,
  payload: PayloadType
};

export type SquareType = {
  clicked: boolean,
  color: string,
  status: boolean
};

export type GameState = {
  level: number,
  score: number,
  complete: boolean,
  fail: boolean,
  goal: string,
  squares: Array<Array<SquareType>>,
  time: number,
  speed: number
};
