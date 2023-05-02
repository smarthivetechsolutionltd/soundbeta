import React, { useState, useEffect } from "react";
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
import { useNavigation } from "@react-navigation/native";
import PlayerController from "./PlayerController";
import { Audio } from "expo-av";
import Icon from "react-native-vector-icons/Ionicons";
import { useIsFocused } from "@react-navigation/native";

function PlayerPage() {
  const navigation = useNavigation();
  const [image, setImage] = useState("");
  const [sound, setSound] = useState(null);
  const [play, setPlay] = useState(false);
  const [fav, setFav] = useState(false);
  const [fetched, setFetch] = useState(false);
  const isFocused = useIsFocused();
  const [uri, setUri] = useState(null);
  const [songName, setSongName] = useState(null);
  const [songImg, setSongImg] = useState(null);
  const [songArtist, setSongArtist] = useState(null);
  const [userData, setUserData] = useState([]);

  async function playSound() {
    try {
      if (sound !== null) {
        const status = await sound.getStatusAsync();
        if (status.isLoaded && !status.isPlaying) {
          if (lastPlaybackPosition !== null) {
            await sound.playFromPositionAsync(lastPlaybackPosition);
          } else {
            await sound.playAsync();
          }
        }
      } else {
        const { sound: newSound } = await Audio.Sound.createAsync(
          { uri: uri },
          { shouldPlay: true }
        );
        setSound(newSound);
      }

      setPlay(true);
    } catch (error) {
      console.log("Failed to play sound: " + error);
    }
  }

  async function pauseSound() {
    try {
      if (sound !== null) {
        const status = await sound.getStatusAsync();
        if (status.isLoaded && status.isPlaying) {
          setLastPlaybackPosition(status.positionMillis); // Save the last playback position
          await sound.pauseAsync();
          setPlay(false);
        }
      }
    } catch (error) {
      console.log("Failed to pause sound: " + error);
    }
  }

  return (
    <View style={styles.mainContainer}>
      <StatusBar style="light" />

      <View style={styles.upperContainer}></View>

      <View>
        <Image style={styles.imageContainer} source={{ uri: image }} />
      </View>

      <View style={styles.nameFav}>
        <Text style={styles.musicName}>{}</Text>
        <TouchableOpacity style={styles.flexRightItm}>
          <Icon name="love" size={25} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.controlContainer}>
        <PlayerController
          play={play}
          //   onPlay={playSound}
          onPause={pauseSound}
          artist={songArtist}
          //   name={songName}
          //   image={songImg}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#121933",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  upperContainer: {
    display: "flex",
  },

  nameFav: {},

  imageContainer: {
    borderColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  musicName: {
    fontSize: 20,
    color: "white",
  },
});

export default PlayerPage;
