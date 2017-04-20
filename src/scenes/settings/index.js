import React, { PureComponent } from "react";
import { Content, Text, Picker, Form, Item, Input } from "native-base";
import { AndroidBackDecorator } from "../../decorators/androidBack";
import { InfoDecorator } from "../../decorators/info";
import { SettingsDecorator } from "../../decorators/settings";
import { SettingsContainer, Button, Span, Center, Space } from "./styles";

@SettingsDecorator()
@AndroidBackDecorator()
@InfoDecorator()
export class SettingsScene extends PureComponent {
  state = { username: "" };

  onValueChange = selected => {
    // change theme value in store
  };

  onUsernameChange = text => {
    this.setState(() => {
      return { username: text.replace(" ", "").toUpperCase() };
    });
  };

  render() {
    const { container, button, buttonText, text } = this.props.settings.theme;
    // test data
    const options = ["Dark", "Light", "Oceanic", "Solarized"];

    return (
      <Content style={container}>
        <SettingsContainer>

          <Span style={[text, { textAlign: "left" }]}>
            Theme
          </Span>
          <Picker
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
