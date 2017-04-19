import "react-native";
import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import Thunk from "redux-thunk";
import renderer from "react-test-renderer";

import { Reducers } from "../../../src/reducers/";
import { ModalActions } from "../../../src/actions/";

const store = createStore(Reducers, compose(applyMiddleware(Thunk)));

test("Check if messages get added", () => {
  for (var e = 0; e < 10; e++) {
    const text = `message ${e + 1}`;
    const time = e * 100;
    store.dispatch(ModalActions.setMessage({ text: text, time: time }));
    expect(store.getState().ModalReducer.messages.length).toBe(e + 1);
    expect(store.getState().ModalReducer.messages[e].text).toBe(text);
    expect(store.getState().ModalReducer.messages[e].time).toBe(time);
  }
});

test("Check if messages get remove", () => {
  for (var e = 0; e < 10; e++) {
    const currentLength = store.getState().ModalReducer.messages.length;
    store.dispatch(ModalActions.removeMessage());
    expect(store.getState().ModalReducer.messages.length).toBe(
      currentLength - 1
    );
  }
});
