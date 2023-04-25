import React, { useState, useEffect } from "react";
import * as MediaLibrary from 'expo-media-library';

import {
  StyledContainer,
  InnerContainer,
  OnboardWrapper,
  OnboardButton,
  GoogleOnboardButton,
  LoginButton,
  OnboardButtonText,
  LoginButtonText,
  OnboardPageLogo,
  OnboardLogo,
  OnboardPageLogoTxt,
  OnboardTextWrap,
  OnboardTextLogo
} from "./Styles";

import { useNavigation } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";

import { AntDesign } from '@expo/vector-icons';
import { Alert } from "react-native";

function Onboarding() {

  const navigation = useNavigation();

  const persmissionAlert = () => {
    Alert.alert("Permission Required", "This app need to read your audio files!", [{
      text: 'I an ready',
      onPress: () => { getPermssion() }
    }, {
      text: 'Cancel',
      onPress: () => { persmissionAlert() }
    }])
  }


  const getPermssion = async () => {
    const permissions = await MediaLibrary.getPermissionsAsync()
    if (permissions.granted) {

    }
    if (!permissions.granted && permissions.canAskAgain) {
      const { status, canAskAgain } = await MediaLibrary.requestPermissionsAsync();

      if (status === 'denied' && canAskAgain) {
        persmissionAlert();
      }
      if (status === 'granted') {

      }

      if (status === 'denied' && !canAskAgain) {

        
      }
    }

  }


    useEffect(() => {
      getPermssion()
    }, [])

    return (
      <>
        <StyledContainer>

          <StatusBar style="light" />

          <InnerContainer>

            <OnboardLogo>
              <OnboardPageLogo
                resizeMode="cover"
                source={require("../../assets/img/artist.png")}
              />
              <OnboardTextWrap>
                <OnboardTextLogo
                  source={require("../../assets/img/Logowhite.png")}
                />
                <OnboardPageLogoTxt>Free Music.</OnboardPageLogoTxt>
                <OnboardPageLogoTxt>Enjoy your Favourites.</OnboardPageLogoTxt>
              </OnboardTextWrap>

            </OnboardLogo>

            <OnboardWrapper>

              <OnboardButton onPress={() => navigation.navigate("Signup")}>
                <OnboardButtonText>Sign Up (Free)</OnboardButtonText>
              </OnboardButton>

              <GoogleOnboardButton onPress={() => navigation.navigate("employeeLogin")}>
                <AntDesign name="google" size={20} color="black" />
                <OnboardButtonText>Continue with Google</OnboardButtonText>
              </GoogleOnboardButton>

              <LoginButton onPress={() => navigation.navigate("Login")}>
                <LoginButtonText>Login</LoginButtonText>
              </LoginButton>

            </OnboardWrapper>
          </InnerContainer>
        </StyledContainer>
      </>
    );
  
}

export default Onboarding;
