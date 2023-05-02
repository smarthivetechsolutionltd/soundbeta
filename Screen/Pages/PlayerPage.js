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
import { AntDesign, SimpleLineIcons, Entypo } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";
import BottomNav from './BottomNav';

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

      <View style={styles.upperContainer}>
        <SimpleLineIcons
          name="arrow-down"
          size={30}
          color="white"
          style={{ padding: 5 }}
        />

        <TouchableOpacity>
        <Entypo name="share" size={30} color="white" style={{}} />
        </TouchableOpacity>
        
      </View>

      <View style={styles.imageContainer}>
        <Image  source={{ uri: image }} />
      </View>

      <View style={styles.nameFav}>
        <Text style={styles.musicName}>Artist Name</Text>
        <TouchableOpacity style={styles.flexRightItm}>
          <AntDesign name="hearto" size={30} color="white" style={{}} />
        </TouchableOpacity>
      </View>

      <View style={styles.controlContainer}>
                <PlayerController play={play} onPlay={playSound} onPause={pauseSound} artist={songArtist} name={songName} image={songImg} />
                {/* <Text style={styles.txt}>PlayerController</Text> */}
                <BottomNav />
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#121933",
    flex: 1,
    paddingTop: 40
  },

  upperContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },

  nameFav: {
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop: 40,
    padding: 20,
  },

  imageContainer: {
    borderColor: "white",
    borderWidth: 1,
    width: "70%",
    padding: 100,
    display:"flex",
    marginLeft: "auto",
    marginRight:"auto",
    justifyContent:"center",
    marginTop: 20
  },

  musicName: {
    fontSize: 20,
    color: "white",
  },
  controlContainer: {
    flex: 1,
    backgroundColor: "#121933",
    width: '100%',
    position: 'absolute',
    bottom: 0,
    height: '16%',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
},
});

export default PlayerPage;
