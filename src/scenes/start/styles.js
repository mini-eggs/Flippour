import Styled from "styled-components/native";
import { Dimensions } from "react-native";
import * as Colors from "../../styles/variables";

export const Container = Styled.View`
  flex: 1
  justify-content: center;
  align-items: center;
  background-color: ${Colors.background};
`;

export const Center = Styled.View`
  align-items: center;
  justify-content: center;
`;

export const Title = Styled.Text`
  font-size: 48;
  color: white;
  text-align: center;
`;

export const Space = Styled.View`
  height: 50
`;

export const Button = Styled.TouchableOpacity`
  border-radius: 1000;
  padding: 10;
  min-width: 200;
  margin-bottom: 15;
`;

export const Span = Styled.Text` 
  font-size: 20;
  color: white;
  text-align: center;
`;
