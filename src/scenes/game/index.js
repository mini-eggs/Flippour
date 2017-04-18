import React, { PureComponent } from "react";
import { Dimensions } from "react-native";
import { FluxDecorator } from "../../decorators/flux";
import { GameDecorator } from "../../decorators/game";
import { ModalDecorator } from "../../decorators/modal";
import { SettingsDecorator } from "../../decorators/settings";
import { AndroidBackDecorator } from "../../decorators/androidBack";
import { ScoreBoard } from "../../components/";
import { SingleSquare } from "./singleSquare";
import { Container, Top, Title, Center, Bottom, Row } from "./styles";

@SettingsDecorator()
@ModalDecorator()
@GameDecorator()
@FluxDecorator()
@AndroidBackDecorator("onAndroidBack")
export class GameScene extends PureComponent {
  mounted = false;

  componentWillMount = () => {
    this.props.begin();
  };

  componentDidMount = () => {
    this.mounted = true;
  };

  componentWillUnmount = () => {
    this.mounted = false;
  };

  componentWillReceiveProps = ({ fail, complete, pop, nextLevel }) => {
    if (fail) {
      this.onGameStateChange("game over", pop);
    } else if (complete) {
      this.onGameStateChange("complete", nextLevel);
    }
  };

  onAndroidBack = () => {
    this.props.forceGameOver();
  };

  onGameStateChange = (msg, fn) => {
    this.props.setMessage({ text: msg, time: 1000 });
    setTimeout(() => {
      if (this.mounted) fn();
    }, 2000);
  };

  render = () => {
    const x = new Array(this.props.squares.length).fill(0);
    const y = new Array(this.props.squares[0].length).fill(0);
    const { container, title } = this.props.settings.theme;

    return (
      <Container style={container}>
        <Top>
          <Title style={title}>{this.props.goal.toUpperCase()}</Title>
        </Top>
        <Center>
          {x.map((row, xindex) => (
            <Row key={xindex}>
              {y.map((single, yindex) => (
                <SingleSquare
                  square={this.props.squares[xindex][yindex]}
                  onSquareClick={this.props.onSquareClick}
                  key={yindex}
                  fail={this.props.fail}
                  complete={this.props.complete}
                  x={xindex}
                  y={yindex}
                />
              ))}
            </Row>
          ))}
        </Center>
        <Bottom>
          <ScoreBoard />
        </Bottom>
      </Container>
    );
  };
}
