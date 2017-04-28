import Styled from "styled-components/native";
import { Platform, Dimensions } from "react-native";

export const StoreContainer = Styled.View`
  padding: 20;
  padding-top: ${(Platform.OS === "ios" ? 22 : 0) + 75};
`;

export const Title = Styled.Text`
  font-size: 32;
  margin-bottom: 50;
`;

export const Products = Styled.View`
  align-items: center;
  justify-content: center;
  align-self: center;
  width: ${Dimensions.get("window").width / 2};
  height: ${Dimensions.get("window").width / 2};
`;

export const Row = Styled.View`
  flex: 1;
  flex-direction: row;
`;

export const Span = Styled.Text` 
  font-size: 20;
  color: white;
  font-weight: 600;
  text-align: center;
`;
