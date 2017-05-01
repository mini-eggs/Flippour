import React, { Component } from "react";
import { Icon } from "native-base";
import { View } from "react-native";
import Styled from "styled-components/native";
import { Sound } from "../../classes/sound";
import { FluxDecorator } from "../../decorators/flux";
import { SettingsDecorator } from "../../decorators/settings";
import { Button } from "./styles";

@SettingsDecorator()
@FluxDecorator()
export class BackButton extends Component {
  constructor(props) {
    super(props);

    this.sounds = {
      back: new Sound("tap_stop", props.settings.soundsEnabled)
    };
  }
  onPress = () => {
    this.sounds.back.play();
    this.props.pop();
  };

  render() {
    return (
      <Button underlayColor="transparent" onPress={this.onPress}>
        <View>
          <Icon style={this.props.settings.theme.text} name="arrow-back" />
        </View>
      </Button>
    );
  }
}
