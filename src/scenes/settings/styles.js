import Styled from "styled-components/native";
import { Platform } from "react-native";

export const SettingsContainer = Styled.View`
  padding: 20;
  padding-top: ${(Platform.OS === "ios" ? 22 : 0) + 75};
`;

export const Button = Styled.TouchableOpacity`
  border-radius: 1000;
  padding: 10;
  min-width: 200;
  margin-bottom: 15;
`;

export const Title = Styled.Text` 
  font-size: 24;
  color: white;
  text-align: center;
`;

export const Span = Styled.Text` 
  font-size: 20;
  color: white;
  text-align: center;
`;

export const Center = Styled.View`
  align-items: center;
  justify-content: center;
`;

export const Space = Styled.View`
  height: 50
`;
