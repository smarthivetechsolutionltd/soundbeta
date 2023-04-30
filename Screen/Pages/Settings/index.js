import React, { useState } from "react";
import { StyledContainer, InnerContainer } from "./Styles";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet,   KeyboardAvoidingView } from 'react-native';


function index() {

  const [name, setName] = useState('John Doe');
  const [gender, setGender] = useState('Male');
  const [image, setImage] = useState('')
  const [editable, setEditable] = useState(false);

  const toggleEdit = () => {
    setEditable(!editable);
  };

  const saveChanges = () => {
    setEditable(false);
  };

  return (
   
      <KeyboardAvoidingView behavior="padding" style={styles.container}>

      <>
        <StatusBar style="light" />
        <InnerContainer>
          
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={{ uri: 'https://picsum.photos/200' }}
          style={styles.profilePicture}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={toggleEdit}>
        <Text>Edit</Text>
      </TouchableOpacity>

      <View style={styles.detailsContainer}>
        {editable ? (
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
        ) : (
          <Text style={styles.name}>{name}</Text>
        )}
        {editable ? (
          <TextInput
            style={styles.input}
            value={gender}
            onChangeText={setGender}
          />
        ) : (
          <Text style={styles.gender}>{gender}</Text>
        )}
      </View>
      {editable && (
        <TouchableOpacity style={styles.saveButton} onPress={saveChanges}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      )}
    </View>
          
        </InnerContainer>
      </>
      </KeyboardAvoidingView>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  detailsContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  gender: {
    fontSize: 18,
  },
  input: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingHorizontal: 10,
    width: '80%',
    textAlign: 'center',
  },
  saveButton: {
    marginTop: 20,
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});


export default index;
