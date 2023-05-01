import React, { useState, useEffect } from 'react'
import { Text, View, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native'
import * as MediaLibrary from 'expo-media-library';
// import MusicFiles from 'react-native-get-music-files';
import Icon from 'react-native-vector-icons/Ionicons';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import PlayerController from '../PlayerController';
import styles from './Styles';
import BottomNav from '../BottomNav';
import { Audio } from 'expo-av';
import { useNavigation } from "@react-navigation/native";


const SearchPage = () => {
    const navigation = useNavigation();
    const [sound, setSound] = useState(null);
    const [localMusic, setLocalMusic] = useState([])
    const [play, setPlay] = useState(false);
    const [search, setSearch] = useState('');
    const [fetched, setFetch] = useState(false);
    const [uri, setUri] = useState(null);
    const [songName, setSongName] = useState(null);
    const [songImg, setSongImg] = useState(null);
    const [songArtist, setSongArtist] = useState(null);

    const [lastPlaybackPosition, setLastPlaybackPosition] = useState(0);
    const playselected = async (item) => {
        setSongArtist(item.artist)
        // setSongImg(item.track.album.images[0].url)
        setSongName(item.title)

        try {
            if (sound !== null) {
                await sound.stopAsync();
            }

            const { sound: newSound } = await Audio.Sound.createAsync(
                { uri: item.uri },
                { shouldPlay: true }
            );
            setPlay(true)
            setSound(newSound);
        } catch (error) {
            console.log('Failed to play sound: ' + error);
        }
    }

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

            setPlay(true)
        } catch (error) {
            console.log('Failed to play sound: ' + error);
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
            console.log('Failed to pause sound: ' + error);
        }
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.homepageContainer}>
                    <View style={styles.flex}>
                        <Text style={styles.title}>Search</Text>
                        <View style={styles.flex2}>
                            <Icon name="search" size={18} color="#919191" />

                            <TextInput
                                style={styles.input}
                                value={search}
                                placeholder={'Search for songs'}
                            />
                        </View>

                        <TouchableOpacity>
                            <Icon name="play" size={30} color="#fff" />
                        </TouchableOpacity>
                    </View>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        alwaysBounceVertical={false}
                        horizontal={false}>
                        
                    </ScrollView>
                </View>
                <View style={styles.controlContainer}>
                    <PlayerController play={play} onPlay={playSound} onPause={pauseSound} artist={songArtist} name={songName} image={songImg} />
                    {/* <Text style={styles.txt}>PlayerController</Text> */}
                    <BottomNav />
                </View>
            </View>
        </>

    )
}

export default SearchPage