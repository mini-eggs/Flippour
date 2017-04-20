// @flow
import React, { PureComponent } from "react";
import {
  Content,
  Text,
  Picker,
  Form,
  Item,
  Input,
  ListItem,
  CheckBox
} from "native-base";
import { AndroidBackDecorator } from "../../decorators/androidBack";
import { InfoDecorator } from "../../decorators/info";
import { SettingsDecorator } from "../../decorators/settings";
import { SettingsContainer, Button, Span, Center, Space } from "./styles";

type InitialProps = {
  sounds: Object
};

@SettingsDecorator()
@AndroidBackDecorator()
@InfoDecorator()
export class SettingsScene extends PureComponent<InitialProps, any, any> {
  state = { username: "" };

  onValueChange = (selected: string) => {
    // change theme value in store
  };

  onUsernameChange = (text: string) => {
    this.setState(() => {
      return { username: text.replace(" ", "").toUpperCase() };
    });
  };

  onCheckboxChange = () => {
    alert("clicked");
  };

  render() {
    const { container, button, buttonText, text } = this.props.settings.theme;
    // test data
    const options = ["Dark", "Light", "Oceanic", "Solarized"];
    const soundsEnabled = true;

    return (
      <Content style={container}>
        <SettingsContainer>

          <Span style={[text, { textAlign: "left" }]}>
            Theme
          </Span>
          <Picker
            textStyle={Object.assign({}, text, { fontSize: 20 })}
            iosHeader="Select one"
            mode="dropdown"
            selectedValue={options[1]}
            onValueChange={this.onValueChange}
          >
            {options.map((option, index) => {
              return <Picker.Item key={index} label={option} value={option} />;
            })}
          </Picker>

          <Space />

          <Span style={[text, { textAlign: "left" }]}>
            Username
          </Span>
          <Form>
            <Item>
              <Input
                multiline={false}
                placeholder={this.state.username || "EVN"}
                value={this.state.username}
                onChangeText={this.onUsernameChange}
                maxLength={3}
              />
            </Item>
          </Form>

          <Space />

          <Span style={[text, { textAlign: "left" }]}>
            Sounds
          </Span>
          <ListItem style={{ borderColor: "transparent" }}>
            <CheckBox onPress={this.onCheckboxChange} checked={soundsEnabled} />
            <Span style={[text, { textAlign: "left", marginLeft: 15 }]}>
              {soundsEnabled ? "Enabled" : "Disabled"}
            </Span>
          </ListItem>

          <Space />
          <Space />

          <Center>
            <Button style={button}>
              <Span style={buttonText}>
                SAVE
              </Span>
            </Button>
          </Center>

        </SettingsContainer>
      </Content>
    );
  }
}
