import React, { useState, useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import styles from './Styles';
import {
  View,
  Text,
  Share,
  Image,
  TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import PlayerController from "../PlayerController";
import { Audio } from "expo-av";
import { AntDesign, SimpleLineIcons, Entypo } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";
import BottomNav from '../BottomNav';
import Icon from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';

function formatTime(time) {
  const minutes = Math.floor(time / 60000);
  const seconds = ((time % 60000) / 1000).toFixed(0);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function PlayerPage({ route }) {
  const { img, artist, name, uri, link } = route.params;

  const [play, setPlay] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const navigation = useNavigation();
  const [sound, setSound] = useState(null);
  const isFocused = useIsFocused();

  // console.log(img, artist, name, uri)
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [lastPlaybackPosition, setLastPlaybackPosition] = useState(0);

  const onPlaybackStatusUpdate = (status) => {
    setIsPlaying(status.isPlaying);
    setPosition(status.positionMillis);
    setDuration(status.durationMillis);

    if (status.isLoaded && status.didJustFinish) {
      setPlay(false);
    }
  };

  const onSlidingComplete = async (value) => {
    // console.log('compelte');

    if (sound !== null) {
      await sound.setPositionAsync(value);
    }
  };

  useEffect(() => {
    playSound()
  }, [])

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
        newSound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
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

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          `Check out this awesome song I am listening to on *SoundBeta* | *${name}* by *${artist}* ${link}`,
        url: 'https://soundbeta.com',
        title: 'SoundBeta',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  

  return (
    <View style={styles.mainContainer}>
      <StatusBar style="light" />

      <View style={styles.upperContainer}>
     

      <TouchableOpacity onPress={() => navigation.navigate("HomePage")}>
          <AntDesign name="arrowleft" size={30} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={onShare}>
          <Entypo name="share" size={30} color="white" />
        </TouchableOpacity>

      </View>

      <View style={styles.imageContainer}>
        <Image source={{ uri: img }} style={styles.img} />
      </View>

      <View style={styles.nameCont}>
        <Text style={styles.musicName}>{name}</Text>
        <Text style={styles.musicArtist}>{artist}</Text>
      </View>

      <View style={styles.bar} />

      <View style={styles.controlContainer}>

        <Slider
          style={{ width: '100%' }}
          value={position}
          maximumValue={duration}
          onSlidingComplete={onSlidingComplete}
        />
        <View style={styles.flex1}>
          <Text style={styles.musicArtist}>{formatTime(position)}</Text>
          <Text style={styles.musicArtist}>{formatTime(duration)}</Text>
        </View>

        <View style={styles.flex}>
          <View style={styles.nameFav}>
            <TouchableOpacity style={styles.flexRightItm}>
              <Icon name="repeat-outline" size={30} color="white" style={{}} />
            </TouchableOpacity>
          </View>

          <View>
            {play ? (
              <TouchableOpacity style={styles.playBtn} onPress={() => pauseSound()}>
                <Icon name="pause" size={45} color="#121933" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.playBtn} onPress={() => playSound()}>
                <Icon name="play" size={45} color="#121933" />
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.nameFav}>
            <TouchableOpacity style={styles.flexRightItm}>
              <AntDesign name="hearto" size={30} color="white" style={{}} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}


export default PlayerPage;
