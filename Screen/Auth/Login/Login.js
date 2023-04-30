import React, { useState } from 'react'
import { View, Text } from 'react-native'
import styles, { SmallTxtv2, StyledContainer, InnerContainer, FormView, FormInput, TextView, ButtonView, BtnTxt, SmallTxt, ButtonViewActive, ButtonViewinActive, BtnTxtinActive, BtnTxtActive, FormTxt, FormPicker, CreateButtonViewActive, CreateButtonViewinActive, SmallTxtWhite, Buttonborder, ButtonWhite } from "./Styles";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config/Firebaseconfig";



function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [BtnActive, setBtnActive] = useState(false);
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const checkinput = (value) => {
    setPassword(value);
    if (email.length > 0 && value.length >= 8) {
      setBtnActive(true)
    } else {
      setBtnActive(false);
    }
  }

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        if (user.emailVerified) {
          navigation.navigate("InitPage");
          console.log('Login successful')
        } else {
          console.log('email not verified')
        }
      // console.log("User is logged in");
    })
    .catch(() => {
      console.log("error");
    });
    // console.log(email, '>>', password);
    // navigation.navigate("InitPage");
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

          {/* <Buttonborder>
            <ButtonWhite>Log in without password</ButtonWhite>
          </Buttonborder> */}
        </InnerContainer>
      </StyledContainer>
    </>
  )
}

export default Login