import styled from "styled-components";

import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";

//colors

export const Colors = {
  White: "#ffffff",
  Primary: "#121933",
  Secondary: "#A299FF;",
  TextColor: "#121933;",
  Brand: "#044c84",
  Blue: "#4c74a4",
  Black: "#000000",
  Green: "#00FF00",
};

const {  Primary, Secondary,  Brand, TextColor } =
  Colors;

export const StyledContainer = styled.View`
  flex: 1;
  background-color: ${Primary};
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  height: 50%;
`;

export const OnboardLogo = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  height: 60%;
`;

export const OnboardPageLogo = styled.Image`
  width: 100%;
  height: 100%;
`;

export const OnboardWrapper = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;


export const OnboardButton = styled.TouchableOpacity`
  width: 70%;
  padding: 15px;
  background-color: ${Secondary};
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  margin-vertical: 5px;
  margin-top: 20px;
`;

export const OnboardButtonText = styled.Text`
  color: ${TextColor};
  font-size: 16px;
}
`;

export const OnboardPageTitle = styled.Text`
  font-size: 25px;
  text-align: center;
  font-weight: bold;
  color: ${Brand};
  padding-top: 20px;
`;
