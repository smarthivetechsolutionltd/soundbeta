import React, { useState, useEffect } from "react";
import { StyledContainer, InnerContainer } from "./Styles";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { AntDesign } from "@expo/vector-icons";
import { getUserData } from "../../Auth/config/userData";
import { useIsFocused } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import BottomNav from '../BottomNav';
import * as Location from 'expo-location';

const Settings = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("John Doe");
  const [gender, setGender] = useState("None");
  const [image, setImage] = useState("");
  const [editable, setEditable] = useState(false);
  const [userData, setUserData] = useState([]);
  const [location, setLocation] = useState(null);


  const toggleEdit = () => {
    setEditable(!editable);
  };

  const saveChanges = () => {
    setEditable(false);
  };

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      handleRefresh();
      getCordinates();
    }
  }, [isFocused]);

  const getCordinates = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    const latitude = location.coords.latitude;
    const longitude = location.coords.longitude;
    // console.log(latitude,' --- ', longitude);

    getLocation(latitude, longitude)
  }

  const getLocation = async (latitude, longitude) => {
    // console.log(latitude,' --- ', longitude);
    const url = 'https://trueway-geocoding.p.rapidapi.com/ReverseGeocode?location=6.6545057%2C3.2783252&language=en';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b2baa3114dmsh8a19c18e2d16a11p10ab9cjsn4c85dfaf2b29',
        'X-RapidAPI-Host': 'trueway-geocoding.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const address = `${result.results[0].house}, ${result.results[0].street}, ${result.results[0].neighborhood}, ${result.results[0].area}, ${result.results[0].region}, ${result.results[0].country}`;
      setLocation(address);
    } catch (error) {
      console.error(error);
    }
  }

  function handleRefresh() {
    getUserData().then((dataJSON) => {
      setUserData(dataJSON);
      setName(dataJSON.name);
      setGender(dataJSON.gender);
    });
  }

  const addImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(JSON.stringify(_image));
    if (!_image.cancelled) {
      setImage(_image.uri);
    }
  };

  return (

    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <>
        <StatusBar style="light" />
        <InnerContainer>
          <View>
            <View style={styles.ImageContainer}>
              {image && (
                <Image
                  source={{ uri: image }}
                  style={{ width: 200, height: 200 }}
                />
              )}
              <View style={styles.uploadBtnContainer}>


                <TouchableOpacity onPress={addImage} style={styles.uploadBtn}>
                  <Text style={styles.imageText}>
                    {image ? "Edit" : "Upload"} Image
                  </Text>
                  <View style={styles.imageIcon}>
                    <AntDesign name="camera" size={20} color="black" style={{
                      display: "flex",
                      justifyContent: "center", textAlign: "center"
                    }} />
                  </View>
                </TouchableOpacity>

              </View>
            </View>

            <TouchableOpacity onPress={toggleEdit}>
              <Text style={styles.editBtn}>Edit</Text>
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

          {/* <TouchableOpacity
            style={styles.signOutBtn}
            onPress={() => navigation.navigate("Player")}
          >
            <Text style={styles.buttonText}>Player</Text>
          </TouchableOpacity> */}


          <View>
            <Text style={styles.address}>{location}</Text>
          </View>

          <TouchableOpacity style={styles.signOutBtn} onPress={() => navigation.navigate("Login")}>
            <Text style={styles.buttonText}>Log Out</Text>
          </TouchableOpacity>
        </InnerContainer>



      </>

    </KeyboardAvoidingView>


  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121933",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  detailsContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },
  gender: {
    fontSize: 18,
    color: "white",
  },
  input: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingHorizontal: 10,
    width: "80%",
    textAlign: "center",
    color: "white",
  },
  saveButton: {
    marginTop: 20,
    backgroundColor: "blue",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
  uploadBtnContainer: {
    opacity: 0.7,
    marginTop: 30,
    textAlign: "center",
    backgroundColor: "lightgrey",
    width: "100%",
    height: "25%",
  },

  editBtn: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
  },

  ImageContainer: {
    elevation: 2,
    height: 200,
    width: 200,
    backgroundColor: "#efefef",
    position: "relative",
    borderRadius: 999,
    overflow: "hidden",
    marginTop: 20,
  },
  imageText: {
    textAlign: "center",
    paddingTop: 10,
  },
  imageIcon: {
    display: "flex",
    justifyContent: "center",
  },
  signOutBtn: {
    color: "white",
    marginTop: 20,
    backgroundColor: "red",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },

  address: {
    color: '#fff',
    fontSize: 18,
    padding: 10,
    textAlign: 'center',
  }


});

export default Settings;
