import Styled from "styled-components/native";

export const Center = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const GameOverTitle = Styled.Text`
  font-size: 48;
  text-align: center;
`;

export const Spacer = Styled.View`
  height: 50;
`;

export const CustomButton = Styled.TouchableOpacity`
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
