import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import { AnimatedSquare } from "../../../src/scenes/game/animatedSquare.js";
import { SingleSquare } from "../../../src/scenes/game/singleSquare.js";
import { GameScene } from "../../../src/scenes/game/index.js";

test("AnimatedSquare renders correctly", () => {
  const tree = renderer.create(<AnimatedSquare color="purple" />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("SingleSquare renders correctly", () => {
  const tree = renderer.create(<SingleSquare x={99} y={24} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("GameScene renders correctly", () => {
  const tree = renderer
    .create(
      <SingleSquare
        squares={[[{ clicked: false, status: false, color: "purple" }]]}
        complete={false}
        fail={false}
        onSquareClick={() => {}}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
