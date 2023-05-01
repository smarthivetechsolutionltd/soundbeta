import React, { useState } from 'react'
import { View, Text, ToastAndroid } from 'react-native'
import styles, { ErrTxt, ProgressDialog, StyledContainer, InnerContainer, FormView, TextView, FormInput, ButtonView, BtnTxt, SmallTxt, ButtonViewActive, ButtonViewinActive, BtnTxtinActive, BtnTxtActive, FormTxt, FormPicker, CreateButtonViewActive, CreateButtonViewinActive, SmallTxtWhite, Buttonborder, ButtonWhite } from "./Styles";
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
import LottieView from 'lottie-react-native';



function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [BtnActive, setBtnActive] = useState(false);
  const [errorTxt, setErrorTxt] = useState('');
  const [progressDialog, setProgressDialog] = useState(false)

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
    setProgressDialog(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        if (user.emailVerified) {
          navigation.navigate("HomePage");

          console.log('Login successful');
          ToastAndroid.show('Login successful', ToastAndroid.SHORT);

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
            setProgressDialog(false)

            AsyncStorage.setItem('userData', jsonString)
              .then(() => {
                console.log('Data stored in local storage');
              })
              .catch(error => {
                console.log('Error storing data in local storage', error);
              });
          } else {
            console.log('No such document!');
            setProgressDialog(false)

          }
        }).catch(err => {
          console.log(err);
          setProgressDialog(false)

        })
      })
      .catch(err => {
        console.log("error", err);
        const regex = /\(([^)]+)\)/;
        const match = regex.exec(err);
        const error = match[1];
        setProgressDialog(false)

        if (error === 'auth/wrong-password') {
          setErrorTxt('Wrong email or Password')
        }

        if (error === 'auth/network-request-failed') {
          setErrorTxt('Network error, Please check your internet..')
        }
      });
  }


  return (
    <>
      <StyledContainer>
        <StatusBar style="light" />

        <InnerContainer>
          {progressDialog && (
            <ProgressDialog>
            <View style={styles.centerinParent}>
              <Text style={styles.textSmall}>Please wait while we log you in...</Text>
                <LottieView
                  source={require('../../../assets/anim/loadingPlay.json')}
                  autoPlay
                  loop
                  style={styles.lottie}
                />
              </View>
            </ProgressDialog>
          )}
          

          <ErrTxt>{errorTxt}</ErrTxt>

          <FormView>
            <TextView>Email</TextView>

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
              icon="lock"
              placeholder="* * * * * * *"
              onChangeText={(text) => { checkinput(text) }}
              label="Password"
              keyboardType="default"
    
              isPassword={true}
       
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
};



export default Login