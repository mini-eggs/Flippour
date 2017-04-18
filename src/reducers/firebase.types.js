// @flow

type Score = {
  level: number,
  score: number,
  time: number,
  timeDesc: number,
  user: string
};

export type FirebaseState = {
  recentScores: Array<Score>,
  highScores: Array<Score>
};

export type ActionType = {
  type: string,
  payload: Object
};
