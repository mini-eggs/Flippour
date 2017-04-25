import React, { PureComponent } from "react";
import { FirebaseDecorator } from "../../decorators/firebase";
import { FluxDecorator } from "../../decorators/flux";
import { SettingsDecorator } from "../../decorators/settings";
import { FadeInDecorator } from "../../decorators/fadeIn";
import { Container, Title, Space, Span, Center, Button } from "./styles";

@SettingsDecorator()
@FadeInDecorator(250, 250)
@FirebaseDecorator()
@FluxDecorator()
export class StartScene extends PureComponent {
  componentWillReceiveProps() {
    this.props.preload();
  }

  render() {
    const { container, title, button, buttonText } = this.props.settings.theme;
    const buttons = [
      { onPress: this.props.game, title: "PLAY" },
      { onPress: this.props.recent, title: "YOUR RECENT" },
      { onPress: this.props.highscores, title: "HIGH SCORES" },
      { onPress: this.props.settingsKey, title: "SETTINGS" }
    ];

    return (
      <Container style={container}>
        <Title style={title}>FLIPPOUR</Title>
        <Space />
        <Center>
          {buttons.map(({ onPress, title }, index) => {
            return (
              <Button key={index} onPress={onPress} style={button}>
                <Span style={buttonText}>{title}</Span>
              </Button>
            );
          })}
        </Center>
      </Container>
    );
  }
}
