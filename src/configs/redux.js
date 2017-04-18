import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "remote-redux-devtools";
import { Provider } from "react-redux";
import Thunk from "redux-thunk";
import { Reducers } from "../reducers/";

function composeMiddlewares(props) {
  return __DEV__ ? composeWithDevTools(props) : compose(props);
}

const middlewares = applyMiddleware(Thunk);
const store = createStore(Reducers, composeMiddlewares(middlewares));

export const ReduxLayer = props => {
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  );
};
