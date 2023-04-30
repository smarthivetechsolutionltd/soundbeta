import React, { useState } from 'react'
import { View, Text } from 'react-native'
import styles, { ErrTxt, SmallTxtv2, StyledContainer, InnerContainer, FormView, FormInput, TextView, ButtonView, BtnTxt, SmallTxt, ButtonViewActive, ButtonViewinActive, BtnTxtinActive, BtnTxtActive, FormTxt, FormPicker, CreateButtonViewActive, CreateButtonViewinActive, SmallTxtWhite, Buttonborder, ButtonWhite } from "./Styles";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config/Firebaseconfig";
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import AsyncStorage from "@react-native-async-storage/async-storage";



function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [BtnActive, setBtnActive] = useState(false);
  const [errorTxt, setErrorTxt] = useState('')

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

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
          console.log('email not verified');
          setErrorTxt('Your email not verified, Please check your inbox/spam')
        }
        // console.log("User is logged in");
        return user
      })
      .then(async (user) => {
        await getDoc(doc(db, "users", user.uid)).then((doc) => {
          if (doc.exists) {
            const jsonString = JSON.stringify(doc.data());

            AsyncStorage.setItem('userData', jsonString)
              .then(() => {
                console.log('Data stored in local storage');
              })
              .catch(error => {
                console.log('Error storing data in local storage', error);
              });
          } else {
            console.log('No such document!');
          }
        }).catch(err => {
          console.log(err);
        })
      })
      .catch(err => {
        console.log("error", err);
      });
  }


  return (
    <>
      <StyledContainer>
        <StatusBar style="light" />

        <InnerContainer>

          <ErrTxt>{errorTxt}</ErrTxt>

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