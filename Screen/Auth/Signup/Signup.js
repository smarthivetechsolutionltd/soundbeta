import React, { useState } from "react";
import { StyledContainer, InnerContainer, FormView, FormInput } from "./Styles";
import { StatusBar } from "expo-status-bar";
import { View, Text, TextInput, Button } from "react-native";

function Signup() {
  const [currentStep, setCurrentStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <>
      <StyledContainer>
        <StatusBar style="dark" />

        <InnerContainer>
          {currentStep === 1 && (
            <FormView>
              <FormInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                label="Email Address"
                placeholder="example@gmail.com"
                placeholderTextColor={Hint}
                keyboardType="email-address"
                
              />
              <Button title="Next" onPress={handleNextStep} />
            </FormView>
          )}
          {currentStep === 2 && (
            <View>
              <TextInput
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
              <Button title="Prev" onPress={handlePrevStep} />
              <Button title="Next" onPress={handleNextStep} />
            </View>
          )}
          {currentStep === 3 && (
            <View>
              <TextInput
                placeholder="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
              <Button title="Prev" onPress={handlePrevStep} />
              <Button title="Submit" />
            </View>
          )}
        </InnerContainer>
      </StyledContainer>
    </>
  );
}

export default Signup;
