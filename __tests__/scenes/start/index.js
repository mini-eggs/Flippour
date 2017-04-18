import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import { ReduxLayer } from "../../../src/configs/redux";
import { StartScene } from "../../../src/scenes/start/index.js";

test("StartScene renders correctly", () => {
  const tree = renderer
    .create(<ReduxLayer><StartScene /></ReduxLayer>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
