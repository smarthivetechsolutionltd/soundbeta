import React, { useState } from 'react'
import { View, Text } from 'react-native'
import styles, { SmallTxtv2, StyledContainer, InnerContainer, FormView, FormInput, TextView, ButtonView, BtnTxt, SmallTxt, ButtonViewActive, ButtonViewinActive, BtnTxtinActive, BtnTxtActive, FormTxt, FormPicker, CreateButtonViewActive, CreateButtonViewinActive, SmallTxtWhite, Buttonborder, ButtonWhite } from "./Styles";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";


function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [BtnActive, setBtnActive] = useState(false);

  const checkinput = (value) => {
    setPassword(value);

    if (email.length > 0 && password.length >= 8) {
      setBtnActive(true)
    } else {
      setBtnActive(false);
    }
  }

  const login = () => {
    console.log(email, '>>', password);
    navigation.navigate("InitPage");
  }


  return (
    <>
      <StyledContainer>
        <StatusBar style="light" />

        <InnerContainer>

          <FormView>
            <TextView>Email or username</TextView>

            <FormInput
              value={email}
              onChangeText={(text) => { setEmail(text) }}
              label="Email Address"
              keyboardType="email-address"
            />
          </FormView>

          <FormView>
            <TextView>Password</TextView>

            <FormInput
              value={password}
              onChangeText={(text) => { checkinput(text) }}
              label="Password"
              keyboardType="default"
            />
          </FormView>

          {BtnActive ? (
            <ButtonViewActive onPress={login} >
              <BtnTxtActive>Log in</BtnTxtActive>
            </ButtonViewActive>
          ) : (
            <ButtonViewinActive>
              <BtnTxtinActive>Log in</BtnTxtinActive>
            </ButtonViewinActive>
          )}

          <Buttonborder>
            <ButtonWhite>Log in without password</ButtonWhite>
          </Buttonborder>
        </InnerContainer>
      </StyledContainer>
    </>
  )
}

export default Login