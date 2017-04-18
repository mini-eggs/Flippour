import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import { ReduxLayer } from "../../src/configs/redux";
import { ScoreBoard, BackButton } from "../../src/components/index.js";

test("ScoreBoard renders correctly", () => {
  const tree = renderer
    .create(<ReduxLayer><ScoreBoard /></ReduxLayer>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("BackButton renders correctly", () => {
  const tree = renderer
    .create(<ReduxLayer><BackButton /></ReduxLayer>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
