import React from "react";
import { StyledContainer, InnerContainer } from "./Styles";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

function index() {
  return (
    <>
      <StyledContainer>
        <StatusBar style="light" />

        <InnerContainer>
          
        </InnerContainer>
      </StyledContainer>
    </>
  );
}

export default index;
