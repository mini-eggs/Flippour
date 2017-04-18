import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import { ReduxLayer } from "../../../src/configs/redux";
import { ScoresScene } from "../../../src/scenes/scores/index.js";

test("ScoresScene renders correctly", () => {
  const tree = renderer
    .create(
      <ReduxLayer>
        <ScoresScene
          scores={[{ score: 99, level: 24 }]}
          featured={{ score: 200, level: 100 }}
          title={"title here"}
          subtitle={"subtitle here"}
        />
      </ReduxLayer>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
