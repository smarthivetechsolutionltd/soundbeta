import styled from "styled-components";
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from "react-native";

//colors

export const Colors = {
  White: "#ffffff",
  Primary: "#121933",
  Secondary: "#A299FF",
  InActive: "#8B8AC1",
  TextColor: "#121933",
  Grey: "#ECEBFF",
};

const { White, Primary, Secondary, TextColor, Grey, InActive } = Colors;

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
width: 100%;
`
export const ErrTxt = styled.Text`
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  text-align: center;
  padding-bottom: 10px;
`

export const TextView = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  padding-bottom: 10px;
`

export const ButtonViewActive = styled.TouchableOpacity`
  color: #fff;
  background-color: ${Secondary};
  padding: 10px;
  width: 35%;
  align-self: center;
  margin-top: 25%;
  border-radius: 20px;
`
export const BtnTxtActive = styled.Text`
  color: #000;
  font-size: 20px;
  text-align: center;
  font-size: 14px;
`
export const ButtonViewinActive = styled.TouchableOpacity`
  color: #fff;
  background-color: ${InActive};
  padding: 10px;
  width: 35%;
  align-self: center;
  margin-top: 25%;
  border-radius: 20px;
`
export const BtnTxtinActive = styled.Text`
  color: #000;
  font-size: 20px;
  text-align: center;
  font-size: 14px;
`

export const SmallTxt = styled.Text`
  color: #CCCCCC;
  font-size: 10px;
  margin-top: 15px
`
export const SmallTxtv2 = styled.Text`
  color: #CCCCCC;
  font-size: 10px;
`

export const SmallTxtWhite = styled.Text`
  color: #fff;
  font-size: 10px;
  margin-top: 15px
`

export const FormInput = styled.TextInput`
color: ${TextColor};
background-color: ${White};
border-radius: 7px;
font-size: 14px;
padding: 10px;
width: 100%;
`
export const FormPicker = styled.TouchableOpacity`
background-color: ${White};
border-radius: 7px;
padding: 10px;
width: 100%;
`
export const FormTxt = styled.Text`
color: ${TextColor};
font-size: 14px;
`

export const CreateButtonViewActive = styled.TouchableOpacity`
  color: #fff;
  background-color: ${Secondary};
  padding: 10px;
  width: 65%;
  align-self: center;
  margin-top: 25%;
  border-radius: 20px;
`
export const CreateButtonViewinActive = styled.TouchableOpacity`
  color: #fff;
  background-color: ${InActive};
  padding: 10px;
  width: 65%;
  align-self: center;
  margin-top: 25%;
  border-radius: 20px;
`

export const ProgressDialog = styled.View`
  background-color: #00000080;
  height: 100%;
  width: 100%;
  position: absolute;
  justify-content: center;
  z-index: 1000;
`

const styles = StyleSheet.create({
  picker: {
    backgroundColor: '#fff',
    borderRadius: 7,
    width: '100%',
  },

  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },

  centerinParent: {
    alignSelf: 'center',
    height: 200,
    padding: 20,
    width: 250,
    borderRadius: 10,
    backgroundColor: '#fff'
    // marginTop: 100,
  },

  textSmall: {
    color: '#000',
    fontSize: 12,
    marginTop: 10,
    textAlign: 'center',
    marginBottom: 10,
  },

  fullwidth: {
    width: '100%',

  },

  lottie: {
    width: '60%',
    alignSelf: 'center',

  },
});

export default styles;