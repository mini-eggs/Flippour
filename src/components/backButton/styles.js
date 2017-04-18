import { Platform } from "react-native";
import Styled from "styled-components/native";

export const Button = Styled.TouchableHighlight`
  flex: 1;
  position: absolute;
  top: ${Platform.OS === "ios" ? 22 : 0};
  left: 0;
  justify-content: center;
  align-items: center;
  min-width: 50;
  min-height: 42;
  z-index: 9;
`;
