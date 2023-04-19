import React, { useState } from "react";

import {
  StyledContainer,
  InnerContainer,
  OnboardWrapper,
  OnboardButton, 
  OnboardButtonText,
  OnboardPageLogo,
  OnboardLogo,
} from "./Styles";

import { useNavigation } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";

import { View, Text, Image, TouchableOpacity } from "react-native";

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
            <OnboardButton onPress={() => navigation.navigate("signup")}>
              <OnboardButtonText>Sign Up</OnboardButtonText>
            </OnboardButton>

            <OnboardButton onPress={() => navigation.navigate("employeeLogin")}>
              <OnboardButtonText>Continue with Google</OnboardButtonText>
            </OnboardButton>

            <OnboardButton onPress={() => navigation.navigate("serviceLogin")}>
              <OnboardButtonText>Service Users</OnboardButtonText>
            </OnboardButton>
          </OnboardWrapper>
        </InnerContainer>
      </StyledContainer>
    </>
  );
}

export default Onboarding;
