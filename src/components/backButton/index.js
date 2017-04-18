import React, { Component } from "react";
import { Icon } from "native-base";
import { View } from "react-native";
import { FluxDecorator } from "../../decorators/flux";
import { SettingsDecorator } from "../../decorators/settings";
import Styled from "styled-components/native";
import { Button } from "./styles";

@SettingsDecorator()
@FluxDecorator()
export class BackButton extends Component {
  onPress = () => this.props.pop();

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
