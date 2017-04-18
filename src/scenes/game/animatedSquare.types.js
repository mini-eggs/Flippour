// @flow

export type AnimatePropsType = {
  toValue: number,
  duration: number,
  useNativeDriver?: boolean
};

export type nextPropsType = {
  clicked: boolean,
  status?: boolean,
  complete: boolean,
  fail: boolean,
  color: string
};
