import Styled from "styled-components/native";
import * as Colors from "../../styles/variables";

export const Container = Styled.View`
  flex: 1;
`;
export const Top = Styled.View`
  flex: 0.25;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Title = Styled.Text`
  font-size: 48;
  color: white;
  flex: 1;
  margin-top: 22;
  text-align: center;
`;
export const Center = Styled.View`
  flex: 0.5;
  margin: 1.25;
`;
export const Bottom = Styled.View`
  flex: 0.25;
`;
export const SquareButton = Styled.TouchableHighlight`
  flex: 1;
`;

export const SquareContainer = Styled.View`
  flex: 1;
`;
export const Row = Styled.View`
  flex: 1;
  flex-direction: row;
`;
