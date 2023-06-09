import styled from "styled-components";
import { StatusBar } from "react-native";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";

//colors

export const Colors = {
  White: "#ffffff",
  Primary: "#121933",
  Secondary: "#A299FF",
  TextColor: "#121933",
  Grey: "#ECEBFF",
};

const {  White, Primary, Secondary, TextColor, Grey } = Colors;
const statusBarHeight = StatusBar.currentHeight;

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
`;

export const OnboardPageLogo = styled.Image`
  width: 100%;
  height: 100%;
`;
export const OnboardTextWrap = styled.View`
  margin-top: -140px;
  align-items: center;
`

export const OnboardTextLogo = styled.Image`
  width: 56px;
  height: 56px;
  margin-bottom: 10px
`;

export const OnboardPageLogoTxt = styled.Text`
  color: ${White};
  text-align: center;
  font-size: 24px;
  font-weight: 500
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
  margin-top: 50px;
`;

export const GoogleOnboardButton = styled.TouchableOpacity`
  width: 70%;
  padding: 15px;
  background-color: ${Secondary};
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  margin-vertical: 5px;
  margin-top: 20px;
  display: flex;
  flexDirection: row;
  gap: 20px;
`;

export const LoginButton = styled.TouchableOpacity`
  width: 70%;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  margin-vertical: 5px;
  margin-top: 20px;
`;

export const OnboardButtonText = styled.Text`
  color: ${TextColor};
  font-size: 16px;
  font-weight: 600;
`;

export const LoginButtonText = styled.Text`
  color: ${White};
  font-size: 18px;
  font-weight: 500;
`;

