import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import { ReduxLayer } from "../../../src/configs/redux";
import { AnimatedSquare } from "../../../src/scenes/game/animatedSquare.js";
import { SingleSquare } from "../../../src/scenes/game/singleSquare.js";
import { GameScene } from "../../../src/scenes/game/index.js";

test("AnimatedSquare renders correctly", () => {
  const tree = renderer.create(<AnimatedSquare color="purple" />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("AnimatedSquare - change clicked status and check if animating", async () => {
  const component = renderer.create(
    <AnimatedSquare
      fail={false}
      clicked={false}
      complete={false}
      color="purple"
    />
  );

  expect(component.getInstance().state.animating).toBe(false);
  expect(component.toJSON()).toMatchSnapshot();

  component.update(
    <AnimatedSquare
      fail={false}
      clicked={true}
      complete={false}
      color="purple"
    />
  );

  expect(component.getInstance().state.animating).toBe(true);
  expect(component.toJSON()).toMatchSnapshot();
});

test("AnimatedSquare - change color and complete level and check if new level started", async () => {
  const component = renderer.create(
    <AnimatedSquare
      fail={false}
      clicked={false}
      complete={false}
      color="blue"
    />
  );

  expect(component.getInstance().state.animating).toBe(false);
  expect(component.toJSON()).toMatchSnapshot();

  component.update(
    <AnimatedSquare
      fail={false}
      clicked={false}
      complete={true}
      color="orange"
    />
  );

  expect(component.getInstance().state.animating).toBe(true);
  expect(component.toJSON()).toMatchSnapshot();
});

test("SingleSquare renders correctly", () => {
  const tree = renderer.create(<SingleSquare x={99} y={24} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("GameScene renders correctly", () => {
  const tree = renderer
    .create(
      <ReduxLayer>
        <GameScene
          goal="blue"
          squares={[[{ clicked: false, status: false, color: "purple" }]]}
          complete={false}
          fail={false}
          onSquareClick={() => {}}
        />
      </ReduxLayer>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
