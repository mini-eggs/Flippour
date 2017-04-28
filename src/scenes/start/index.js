import React, { PureComponent } from "react";
import { Icon } from "native-base";
import { SingleSquare } from "./squareButton";
import { FirebaseDecorator } from "../../decorators/firebase";
import { FluxDecorator } from "../../decorators/flux";
import { SettingsDecorator } from "../../decorators/settings";
import { FadeInDecorator } from "../../decorators/fadeIn";
import { Container, Center, Row } from "./styles";

@SettingsDecorator()
@FadeInDecorator(250, 250)
@FirebaseDecorator()
@FluxDecorator()
export class StartScene extends PureComponent {
  render() {
    const { container, title, button, buttonText } = this.props.settings.theme;
    const colors = this.props.gameColors[this.props.settings.themeName];
    const IconStyle = { ...buttonText, fontSize: 48 };

    return (
      <Container style={container}>
        <Center>
          <Row>
            <SingleSquare onPress={this.props.game} color={colors.red}>
              <Icon style={IconStyle} name="ios-play" />
            </SingleSquare>
            <SingleSquare onPress={this.props.highscores} color={colors.blue}>
              <Icon style={IconStyle} name="ios-star" />
            </SingleSquare>
          </Row>
          <Row>
            <SingleSquare onPress={this.props.store} color={colors.orange}>
              <Icon style={IconStyle} name="ios-bookmark" />
            </SingleSquare>
            <SingleSquare onPress={this.props.settingsKey} color={colors.green}>
              <Icon style={IconStyle} name="ios-settings" />
            </SingleSquare>
          </Row>
        </Center>
      </Container>
    );
  }
}
