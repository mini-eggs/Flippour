import React, { Component } from "react";
import { Content } from "native-base";
import { AndroidBackDecorator } from "../../decorators/androidBack";
import { InfoDecorator } from "../../decorators/info";
import { SettingsDecorator } from "../../decorators/settings";
import {
  FeaturedContainer,
  Title,
  Featured,
  FeaturedDetails,
  FeaturedScoreText,
  FeaturedScore,
  SubTitle,
  Ranking,
  Number,
  Score,
  Level,
  Spacer
} from "./styles";

@SettingsDecorator()
@AndroidBackDecorator()
@InfoDecorator()
export class ScoresScene extends Component {
  render() {
    const { scores, featured, subtitle } = this.props;
    let feat = featured ? featured : { level: 0, score: 0 };

    const { container, title, text } = this.props.settings.theme;

    // toString() fixes a crash on Android
    // read more about it here:
    // https://github.com/facebook/react-native/issues/13080

    return (
      <Content style={container}>
        <FeaturedContainer>
          <Title style={title}>{this.props.title}</Title>
          <Featured>
            <FeaturedDetails>
              <FeaturedScoreText style={text}>
                #1
              </FeaturedScoreText>
              <FeaturedScoreText style={text}>
                lvl {feat.level.toString()}
              </FeaturedScoreText>
            </FeaturedDetails>
            <FeaturedScore style={text}>{feat.score.toString()}</FeaturedScore>
          </Featured>
        </FeaturedContainer>
        <SubTitle style={text}>{subtitle}</SubTitle>
        {scores.map(({ score, level }, index) => {
          if (index === 0) return null;
          return (
            <Ranking key={index - 1}>
              <Number style={text}>
                #{(index + 1).toString()}
              </Number>
              <Score style={text}>
                {score.toString()} pts
              </Score>
              <Level style={text}>
                lvl {level.toString()}
              </Level>
            </Ranking>
          );
        })}
        <Spacer />
      </Content>
    );
  }
}
