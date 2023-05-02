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
import Toast from 'react-native-toast-message';


const SearchPage = () => {
    const navigation = useNavigation();
    const [sound, setSound] = useState(null);
    const [tracks, setTracks] = useState([])
    const [play, setPlay] = useState(false);
    const [search, setSearch] = useState('');
    const [fetched, setFetch] = useState(false);
    const [uri, setUri] = useState(null);
    const [songName, setSongName] = useState(null);
    const [songImg, setSongImg] = useState(null);
    const [songArtist, setSongArtist] = useState(null);


    useEffect(() => {
        getTracks()
    }, []);

    const handleTextChange = (newText) => {
        setSearch(newText);
    };

    const getTracks = async () => {
        const url = `https://spotify81.p.rapidapi.com/search?q=drake&type=tracks&offset=0&limit=30&numberOfTopResults=5`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b2baa3114dmsh8a19c18e2d16a11p10ab9cjsn4c85dfaf2b29',
                'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setTracks(result.tracks)

            setUri(result.tracks[0].data.uri);
            setSongArtist(result.tracks[0].data.artists.items[0].profile.name)
            setSongImg(result.tracks[0].data.albumOfTrack.coverArt.sources[0].url)
            setSongName(result.tracks[0].data.name)
        } catch (error) {
            console.error(error);
        }
     }

  
    const searchsong = async () => {

        if (search === '') {
            Toast.show({
                type: 'error', // 'success', 'error', 'info', or 'none'
                text1: 'Search box is empty',
                text2: 'Type something in the seachbox',
                position: 'bottom',
            });
        } else {
            const url = `https://spotify81.p.rapidapi.com/search?q=${search}&type=tracks&offset=0&limit=30&numberOfTopResults=5`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'b2baa3114dmsh8a19c18e2d16a11p10ab9cjsn4c85dfaf2b29',
                    'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                // console.log(result.tracks);
                setTracks(result.tracks)

                setUri(result.tracks[0].data.uri);
                setSongArtist(result.tracks[0].data.artists.items[0].profile.name)
                setSongImg(result.tracks[0].data.albumOfTrack.coverArt.sources[0].url)
                setSongName(result.tracks[0].data.name)
            } catch (error) {
                console.error(error);
            }
        }

        
    }

    const [lastPlaybackPosition, setLastPlaybackPosition] = useState(0);

    const getUri = async (id) => {
        const url = `https://spotify81.p.rapidapi.com/tracks?ids=${id}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b2baa3114dmsh8a19c18e2d16a11p10ab9cjsn4c85dfaf2b29',
                'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            // console.log(result.tracks[0].preview_url);
            playselected(result.tracks[0]);

            setSongArtist(result.tracks[0].artists[0].name)
            setSongName(result.tracks[0].name)
            setSongImg(result.tracks[0].album.images[0].url)

            setUri(result.tracks[0].preview_url);
        } catch (error) {
            console.error(error);
        }
    }

    const playselected = async (item) => {

        try {
            if (sound !== null) {
                await sound.stopAsync();
            }

            const { sound: newSound } = await Audio.Sound.createAsync(
                { uri: item.preview_url },
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
                                onChangeText={handleTextChange}
                                placeholder={'Drake'}
                            />
                        </View>

                        <TouchableOpacity onPress={()=>searchsong()}>
                            <Icon name="play" size={30} color="#fff" />
                        </TouchableOpacity>
                    </View>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        alwaysBounceVertical={false}
                        horizontal={false}>
                        <View>
                            {tracks.map((item, key) => (
                                <TouchableOpacity key={key} style={styles.eachfile} onPress={() => {
                                    getUri(item.data.id)

                                }}>
                                    <Image source={{ uri: item.data.albumOfTrack.coverArt.sources[0].url}} style={styles.img} />
                                    <Text style={styles.title}>{item.data.name}</Text>
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

            <View>
                <Toast ref={(ref) => Toast.setRef(ref)} config={{ position: 'bottom' }} />
            </View>
        </>

    )
}

export default SearchPage