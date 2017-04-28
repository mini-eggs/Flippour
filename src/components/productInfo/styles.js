import { Dimensions } from "react-native";
import Styled from "styled-components/native";

export const Center = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ProductTitle = Styled.Text`
  font-size: 48;
  text-align: center;
  font-weight: 600;
`;

export const ProductHeader = Styled.View`
  justify-content: center;
  align-items: center;
  flex: 1
  height: ${Dimensions.get("window").height / 4};
`;

export const ProductDescription = Styled.Text`
  font-size: 24;
  text-align: left;
  padding-left: 25;
  padding-right: 25;
`;

export const Spacer = Styled.View`
  height: 50;
`;

export const PurchaseButton = Styled.TouchableOpacity`
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
