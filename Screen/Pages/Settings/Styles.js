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