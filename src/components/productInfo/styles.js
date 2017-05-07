import { Dimensions } from "react-native";
import Styled from "styled-components/native";

export const Center = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Spacer = Styled.View`
  height: 50;
`;

export const PurchaseButton = Styled.TouchableOpacity`
  border-radius: 1000;
  padding: 10;
  padding-left: 15;
  padding-right: 15;
  min-width: 200;
`;

export const Span = Styled.Text` 
  font-size: 20;
  color: white;
  text-align: center;
`;

export const ProductSubtitle = Styled.Text`
  font-size: 24;
  text-align: center;
  padding-left: 50;
  padding-right: 50;
`;

export const ProductSquare = Styled.View`
  align-self: center;
`;

export const ProductImage = Styled.Image`
  width: ${Dimensions.get("window").width / 3 - 50};
  height: ${Dimensions.get("window").width / 3 - 50};
  margin: 25;
`;

export const ProductBody = Styled.Text`
  font-size: 18;
  text-align: center;
  padding-left: 50;
  padding-right: 50;
`;
