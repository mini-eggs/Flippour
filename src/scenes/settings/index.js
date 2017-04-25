// @flow
import React, { PureComponent } from "react";
import {
  Content,
  Text,
  Form,
  Item,
  Input,
  ListItem,
  Picker,
  CheckBox
} from "native-base";
import { Modal } from "react-native";
import { AndroidBackDecorator } from "../../decorators/androidBack";
import { InfoDecorator } from "../../decorators/info";
import { FluxDecorator } from "../../decorators/flux";
import { SettingsDecorator } from "../../decorators/settings";
import {
  SettingsContainer,
  Button,
  Span,
  Center,
  Space,
  Title
} from "./styles";

type SettingsType = {
  username: string,
  soundsEnabled: boolean,
  themeName: string,
  themeOptions: Array<string>,
  saveSettings: Function
};

type PropsType = {
  settings: SettingsType
};

type StateType = {
  username: string,
  soundsEnabled: boolean,
  themeName: string
};

@SettingsDecorator()
@AndroidBackDecorator()
@FluxDecorator()
@InfoDecorator()
export class SettingsScene extends PureComponent {
  state: StateType;

  constructor(props: PropsType) {
    super(props);
    this.state = {
      username: props.settings.username,
      soundsEnabled: props.settings.soundsEnabled,
      themeName: props.settings.themeName
    };
  }

  onValueChange = (selected: string) => {
    this.setState(() => {
      return { themeName: selected };
    });
  };

  onUsernameChange = (text: string) => {
    this.setState(() => {
      return { username: text.replace(" ", "").toUpperCase() };
    });
  };

  onCheckboxChange = () => {
    this.setState(({ soundsEnabled }) => {
      return { soundsEnabled: !soundsEnabled };
    });
  };

  saveSettings = () => {
    this.props.saveSettings(this.state);
    this.props.pop();
  };

  render() {
    const {
      container,
      button,
      buttonText,
      text,
      modal,
      modalText
    } = this.props.settings.theme;
    const themeName = this.props.settings.themeName;

    return (
      <Content style={container}>
        <SettingsContainer>

          <Title style={[text, { textAlign: "left" }]}>
            Theme
          </Title>
          <Picker
            headerStyle={modal}
            containerStyle={container}
            headerTextStyle={{ color: modalText.color }}
            textStyle={Object.assign({}, text, { fontSize: 20 })} /* ios */
            style={Object.assign({}, text, {
              fontSize: 20,
              backgroundColor: "transparent"
            })} /* android */
            iosHeader="Themes"
            itemTextStyle={{ color: button.backgroundColor }}
            mode="dialog"
            selectedValue={this.state.themeName}
            onValueChange={this.onValueChange}
          >
            {this.props.themeOptions.map((option, index) => {
              return <Picker.Item key={index} label={option} value={option} />;
            })}
          </Picker>

          <Space />

          <Title style={[text, { textAlign: "left" }]}>
            Username
          </Title>
          <Form>
            <Item>
              <Input
                style={text}
                multiline={false}
                placeholder={this.state.username || "Three letter username"}
                value={this.state.username}
                onChangeText={this.onUsernameChange}
                maxLength={3}
              />
            </Item>
          </Form>

          <Space />

          <Title style={[text, { textAlign: "left" }]}>
            Sounds
          </Title>
          <ListItem style={{ borderColor: "transparent" }}>
            <CheckBox
              onPress={this.onCheckboxChange}
              checked={this.state.soundsEnabled}
            />
            <Span style={[text, { textAlign: "left", marginLeft: 15 }]}>
              {this.state.soundsEnabled ? "Enabled" : "Disabled"}
            </Span>
          </ListItem>

          <Space />

          <Center>
            <Button onPress={this.saveSettings} style={button}>
              <Span style={buttonText}>
                SAVE
              </Span>
            </Button>
          </Center>

          <Space />
          <Space />

        </SettingsContainer>
      </Content>
    );
  }
}
