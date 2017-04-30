import React, { Component } from "react";
import { Left, Right, Body } from "native-base";
import { SettingsDecorator } from "../../decorators/settings";
import { Container, Third, Title, SubTitle } from "./styles";

function format(val) {
  const num = Math.floor(val);
  switch (num.toString().length) {
    case 0: {
      return "00";
    }
    case 1: {
      return `0${num}`;
    }
    default: {
      return num.toString();
    }
  }
}

@SettingsDecorator()
export class ScoreBoardComponent extends Component {
  componentDidMount() {
    this.props.startTimer();
  }
  componentWillReceiveProps({ fail }) {
    if (fail) {
      this.props.stopTimer();
    }
  }
  render() {
    const { time, score, level } = this.props;
    const { text } = this.props.settings.theme;

    return (
      <Container>
        <Third>
          <Left>
            <SubTitle style={text}>
              TIME
            </SubTitle>
            <Title style={text}>
              {format(time / 1000)}
            </Title>
          </Left>
        </Third>
        <Third>
          <Body>
            <SubTitle style={text}>
              LEVEL
            </SubTitle>
            <Title style={text}>
              {format(level)}
            </Title>
          </Body>
        </Third>
        <Third>
          <Right>
            <SubTitle style={text}>
              SCORE
            </SubTitle>
            <Title style={text}>
              {format(score)}
            </Title>
          </Right>
        </Third>
      </Container>
    );
  }
}
