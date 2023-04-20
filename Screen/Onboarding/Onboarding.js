import React, { useState } from "react";

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
} from "./Styles";

import { useNavigation } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";

import { AntDesign } from '@expo/vector-icons';

function Onboarding() {

  const navigation = useNavigation();

  return (
    <>
      <StyledContainer>
        
        <StatusBar style="dark" />

        <InnerContainer>
          
          <OnboardLogo>
            <OnboardPageLogo
              resizeMode="cover"
              source={require("../../assets/img/landing-img.png")}
            />
          </OnboardLogo>

          <OnboardWrapper>

            <OnboardButton onPress={() => navigation.navigate("Signup")}>
              <OnboardButtonText>Sign Up</OnboardButtonText>
            </OnboardButton>

            <GoogleOnboardButton onPress={() => navigation.navigate("employeeLogin")}>
              <AntDesign name="google" size={24} color="black" />
              <OnboardButtonText>Continue with Google</OnboardButtonText>
            </GoogleOnboardButton>

            <LoginButton onPress={() => navigation.navigate("serviceLogin")}>
              <LoginButtonText>Login</LoginButtonText>
            </LoginButton>

          </OnboardWrapper>
        </InnerContainer>
      </StyledContainer>
    </>
  );
}

export default Onboarding;
