import Styled from "styled-components/native";
import { Platform } from "react-native";

export const FeaturedContainer = Styled.View`
  padding: 20;
  padding-top: ${(Platform.OS === "ios" ? 22 : 0) + 75};
`;
export const Featured = Styled.View`
  padding: 20;
  flex-direction: row;
  justifyContent: center;
`;
export const Title = Styled.Text`
  font-size: 32;
  color: white;
`;
export const FeaturedScoreText = Styled.Text`
  color: white;
  font-size: 14;
  text-align: right;
`;
export const FeaturedDetails = Styled.View`
  padding-top: 20;
  padding-right: 10;
  flex-direction: column; 
`;
export const FeaturedScore = Styled.Text`
  color: white;
  font-size: 96;
`;
export const SubTitle = Styled.Text`
  font-size: 24;
  color: white;
  padding: 20;
`;
export const Ranking = Styled.View`
  padding: 20;
  flex-direction: row;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 10;
  margin-top: 5;
  margin-bottom: 5;
  border-radius: 5;
`;
export const Number = Styled.Text`
  flex: 1;
  font-size: 18;
  color: white;
`;
export const Usernname = Styled.Text`
  flex: 1;
  font-size: 18;
  text-align: left;
  color: white;
`;
export const Score = Styled.Text`
  flex: 1;
  font-size: 18;
  text-align: center;
  color: white;
`;
export const Level = Styled.Text`
  flex: 1;
  text-align: right;
  font-size: 18;
  color: white;
`;
export const Spacer = Styled.View`
  height: 100;
`;
