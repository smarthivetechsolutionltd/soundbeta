import React, { useState } from "react";
import styles, { SmallTxtv2, StyledContainer, InnerContainer, FormView, FormInput, TextView, ButtonView, BtnTxt, SmallTxt, ButtonViewActive, ButtonViewinActive, BtnTxtinActive, BtnTxtActive, FormTxt, FormPicker, CreateButtonViewActive, CreateButtonViewinActive, SmallTxtWhite } from "./Styles";
import { StatusBar } from "expo-status-bar";
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';

function Signup() {
  const [date, setDate] = useState(new Date());
  const [currentStep, setCurrentStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [DOB, setDOB] = useState("");

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const genderOption = [
    { value: 'select gender', id: '0' },
    { value: 'Male', id: '1' },
    { value: 'Female', id: '2' }
  ];

  const [genderlist, setgenderlist] = useState(genderOption[0].value);

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = () => {
    if (!isChecked && name.length > 0) {
      setBtnActive4(true)
    } else {
      setBtnActive4(false)
    }
    setIsChecked(!isChecked);
  };

  const [DatePicker, setDatePicker] = useState(false);
  const [BtnActive, setBtnActive] = useState(false);
  const [BtnActive2, setBtnActive2] = useState(false);
  const [BtnActive3, setBtnActive3] = useState(false);
  const [BtnActive4, setBtnActive4] = useState(false);

  const [createLoad, setCreateLoad] = useState(false);


  const checkEmailInput = (value) => {
    setEmail(value);
    if (value.length > 0) {
      setBtnActive(true)
    } else {
      setBtnActive(false)
    }

  }

  const checkName = (value) => {
    setName(value);
  }

  const checkPassinput = (value) => {
    setPassword(value);
    if (value.length >= 8) {
      setBtnActive2(true)
    } else {
      setBtnActive2(false)
    }

  }

  const pickedDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDatePicker(false);
    setDate(currentDate);
    // console.log(currentDate);
  }

  const setgender = (value) => {
    setgenderlist(value);
    if (value === 'select gender') {
      setBtnActive3(false)
    } else {
      setBtnActive3(true)
    }

  }

  const createAccount = () => {
    console.log(name, ',', email, ',', password, ',', date.toDateString(), ',', genderlist)
  }

  return (
    <>
      <StyledContainer>
        <StatusBar style="light" />

        <InnerContainer>
          {currentStep === 1 && (
            <FormView>
              <TextView>Your email?</TextView>

              <FormInput
                value={email}
                onChangeText={(text) => { checkEmailInput(text) }}
                label="Email Address"
                placeholder="example@gmail.com"
                keyboardType="email-address"
              />

              <SmallTxt>You'll need to confirm this email later.</SmallTxt>


              {BtnActive ? (
                <ButtonViewActive onPress={handleNextStep} >
                  <BtnTxtActive>Next</BtnTxtActive>
                </ButtonViewActive>
              ) : (
                <ButtonViewinActive >
                  <BtnTxtinActive>Next</BtnTxtinActive>
                </ButtonViewinActive>
              )}
            </FormView>
          )}
          {currentStep === 2 && (
            <FormView>
              <TextView>Create a password</TextView>

              <FormInput
                value={password}
                onChangeText={(text) => { checkPassinput(text) }}
                label="Password"
                placeholder="12345678"
                keyboardType="default"
              />

              <SmallTxt>At least 8 characters.</SmallTxt>


              {BtnActive2 ? (
                <ButtonViewActive onPress={handleNextStep} >
                  <BtnTxtActive>Next</BtnTxtActive>
                </ButtonViewActive>
              ) : (
                <ButtonViewinActive >
                  <BtnTxtinActive>Next</BtnTxtinActive>
                </ButtonViewinActive>
              )}
            </FormView>
          )}
          {currentStep === 3 && (
            <FormView>
              <TextView>What's your date of birth?</TextView>

              <FormPicker onPress={() => setDatePicker(true)}>
                <FormTxt>{date.toDateString()}</FormTxt>
              </FormPicker>

              {DatePicker && (
                <DateTimePicker
                  value={date}
                  mode="date"
                  display="default"
                  onChange={pickedDate}
                />
              )}

              {BtnActive2 ? (
                <ButtonViewActive onPress={handleNextStep} >
                  <BtnTxtActive>Next</BtnTxtActive>
                </ButtonViewActive>
              ) : (
                <ButtonViewinActive >
                  <BtnTxtinActive>Next</BtnTxtinActive>
                </ButtonViewinActive>
              )}
            </FormView>
          )}
          {currentStep === 4 && (
            <FormView>
              <TextView>Your gender?</TextView>

              <View style={styles.picker}>
                <Picker
                  selectedValue={genderlist}
                  onValueChange={(itemValue) => { setgender(itemValue) }}
                >
                  {genderOption.map((option) => (
                    <Picker.Item
                      key={option.id}
                      label={option.value}
                      value={option.value}
                    />
                  ))}
                </Picker>
              </View>

              {BtnActive3 ? (
                <ButtonViewActive onPress={handleNextStep} >
                  <BtnTxtActive>Next</BtnTxtActive>
                </ButtonViewActive>
              ) : (
                <ButtonViewinActive >
                  <BtnTxtinActive>Next</BtnTxtinActive>
                </ButtonViewinActive>
              )}
            </FormView>
          )}
          {currentStep === 5 && (
            <FormView>
              <TextView>What is your name?</TextView>

              <FormInput
                value={name}
                onChangeText={(text) => { checkName(text) }}
                label="Full Name"
                placeholder="Adam Smith"
                keyboardType="default"
              />

              <SmallTxt>This will appear on your profile.</SmallTxt>

              <SmallTxt />
              <SmallTxt>By creating an account, you agree to Soundbeat Terms and Policies</SmallTxt>
              <SmallTxtWhite>Terms and Policies</SmallTxtWhite>

              <SmallTxt />

              <View style={styles.flex}>
                <SmallTxtv2>I agree to the terms and conditions guiding users on Soundbeat.</SmallTxtv2>

                <TouchableOpacity onPress={handleCheckbox}>
                  <View
                    style={{
                      width: 20,
                      height: 20,
                      borderWidth: 1,
                      borderColor: '#fff',
                      alignItems: 'center',
                      borderRadius: 20,
                      justifyContent: 'center',
                      marginLeft: 10,
                    }}>
                    {isChecked && (
                      <View
                        style={{
                          width: 12,
                          height: 12,
                          borderRadius: 20,
                          backgroundColor: '#fff',
                        }}
                      />
                    )}
                  </View>
                </TouchableOpacity>
              </View>

              {BtnActive4 ? (
                <CreateButtonViewActive onPress={createAccount} >
                  <BtnTxtActive>Create an account</BtnTxtActive>
                </CreateButtonViewActive>
              ) : (
                <CreateButtonViewinActive >
                  <BtnTxtinActive>Create an account</BtnTxtinActive>
                </CreateButtonViewinActive>
              )}
            </FormView>
          )}
        </InnerContainer>
      </StyledContainer>
    </>
  );
}

export default Signup;
