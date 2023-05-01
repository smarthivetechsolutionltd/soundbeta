import React, { useState, useEffect } from 'react'
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
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


const Library = () => {
    const navigation = useNavigation();
    const [sound, setSound] = useState(null);
    const [localMusic, setLocalMusic] = useState([])
    const [play, setPlay] = useState(false);
    const [fav, setFav] = useState(false);
    const [fetched, setFetch] = useState(false);
    const [uri, setUri] = useState(null);
    const [songName, setSongName] = useState(null);
    const [songImg, setSongImg] = useState(null);
    const [songArtist, setSongArtist] = useState(null);

    useEffect(() => {
        getMediaFiles();
        // getMediaFiles2();
    }, [])

    async function getMediaFiles() {
        const { assets } = await MediaLibrary.getAssetsAsync({
            mediaType: 'audio'
        });
        const mediaFiles = assets.map(asset => ({
            uri: asset.uri,
            title: asset.filename,
            // artist: asset.author,
            // album: asset.album,
            duration: asset.duration,
        }));
        // console.log(mediaFiles);
        setLocalMusic(mediaFiles)

        setUri(mediaFiles[0].uri)
        setSongName(mediaFiles[0].title)
        setSongArtist(mediaFiles[0].artist)
        // you now have an array of media files, which you can use to display a list of songs or play them
    }

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

    // async function getMediaFiles2() {

    //     MusicFiles.getAll({

    //     }).then(tracks => {
    //         console.log(tracks)
    //     }).catch(error => {
    //         console.log('cant get files:',error)
    //     })
    // }

    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity style={{
                    paddingLeft: 10, marginTop: 10, marginBottom: 10
                }} onPress={() => navigation.goBack()}>
                    <Icon name="chevron-back-outline" size={30} color="#fff" />
                </TouchableOpacity>

                <View style={styles.homepageContainer}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        alwaysBounceVertical={false}
                        horizontal={false}>
                        {/* <Text>Library</Text> */}
                        <View>
                            {localMusic.map((item, key) => (
                                <TouchableOpacity key={key} style={styles.eachfile} onPress={() => {
                                    playselected(item);
                                    setUri(item.uri);

                                }}>
                                        <Image source={require('../../../assets/img/Logo.png')} style={styles.img} />
                                        <Text style={styles.title}>{item.title.replace(/\.(mp3|aac|MP3)$/i, "")}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
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

export default Library