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
  render() {
    const { container, title, button, buttonText } = this.props.settings.theme;

    return (
      <Container style={container}>
        <Title style={title}>FLIPPOUR</Title>
        <Space />
        <Center>
          <Button onPress={this.props.game} style={button}>
            <Span style={buttonText}>PLAY</Span>
          </Button>
          <Button onPress={this.props.recent} style={button}>
            <Span style={buttonText}>YOUR RECENT</Span>
          </Button>
          <Button onPress={this.props.highscores} style={button}>
            <Span style={buttonText}>HIGH SCORES</Span>
          </Button>
        </Center>
      </Container>
    );
  }
}
