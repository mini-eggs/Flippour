import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import { Flippour } from "../src/index.js";

test("Flippour renders correctly", () => {
  const tree = renderer.create(<Flippour />).toJSON();
  expect(tree).toMatchSnapshot();
});
