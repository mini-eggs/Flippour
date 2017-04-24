import React, { PureComponent } from "react";
import { AnimatedSquare as Square } from "./animatedSquare";
import { SquareButton as Button, SquareContainer as Container } from "./styles";

export class SingleSquare extends PureComponent {
  fail = false;
  complete = false;
  clicked = false;
  status = false;
  color = "transparent";

  shouldComponentUpdate({ square, fail, complete }) {
    let shouldUpdate = false;

    // new board
    if (this.color !== square.color) {
      this.color = square.color;
      shouldUpdate = true;
    }

    // this square has been clicked
    if (this.status !== square.status || this.clicked !== square.clicked) {
      this.status = square.status;
      this.clicked = square.clicked;
      shouldUpdate = true;
    }

    // game over
    if (this.fail !== fail) {
      this.fail = fail;
      shouldUpdate = true;
    } else if (this.complete !== complete) {
      this.complete = complete;
      shouldUpdate = true;
    }

    return shouldUpdate;
  }

  onPress = () => {
    setImmediate(() => {
      this.props.onSquareClick(this.props.x, this.props.y);
    });
  };

  render = () => {
    return (
      <Button
        activeOpacity={1}
        underlayColor="transparent"
        onPress={this.onPress}
      >
        <Container>
          <Square
            fail={this.fail}
            complete={this.complete}
            status={this.status}
            clicked={this.clicked}
            color={this.props.gameColors[this.color]}
            x={this.props.x}
            y={this.props.y}
          />
        </Container>
      </Button>
    );
  };
}
