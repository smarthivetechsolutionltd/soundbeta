import styled from "styled-components";

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

export const StyledContainer = styled.View`
  flex: 1;
  background-color: ${Primary};
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const FormView = styled.View`
padding: 20px;
`

export const FormInput = styled.TextInput`
color: ${TextColor};
border: ${White};
padding: 20px;
width: 90%;
`

