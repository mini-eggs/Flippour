import "react-native";
import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import Thunk from "redux-thunk";
import renderer from "react-test-renderer";

import { Reducers } from "../../../src/reducers/";
import { GameActions } from "../../../src/actions/";

function getStore() {
  return createStore(Reducers, compose(applyMiddleware(Thunk)));
}

test("Check nextLevel action", () => {
  const store = getStore();
  for (var e = 0; e < 100; e++) {
    expect(store.getState().GameReducer.level).toBe(e + 1);
    store.dispatch(GameActions.nextLevel());
    const data = store.getState().GameReducer;
    data.squares = null;
    data.goal = null;
    expect(data).toMatchSnapshot();
  }
});

test("Check if game time progresses manually", () => {
  const store = getStore();
  const initialTime = store.getState().GameReducer.time;
  for (var e = 0; e < 100; e++) {
    expect(store.getState().GameReducer.time).toBe(initialTime - e);
    store.dispatch(GameActions.setTimer(initialTime - e - 1));
    expect(store.getState().GameReducer.time).not.toBe(initialTime);
    const data = store.getState().GameReducer;
    data.squares = null;
    data.goal = null;
    expect(data).toMatchSnapshot();
  }
});
