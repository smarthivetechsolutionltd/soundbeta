import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View, ScrollView, Image, Button, BackHandler, ToastAndroid } from 'react-native';
import styles from './Styles';
import BottomNav from '../BottomNav';
import Icon from 'react-native-vector-icons/Ionicons';
import PlayerController from '../PlayerController';
import { Audio } from 'expo-av';
import { useIsFocused } from '@react-navigation/native';
import { getUserData } from '../../Auth/config/userData';
import { useNavigation } from "@react-navigation/native";


const HomePage = (props) => {
    const navigation = useNavigation();
    const [sound, setSound] = useState(null);
    const [play, setPlay] = useState(false);
    const [fav, setFav] = useState(false);
    const [fetched, setFetch] = useState(false);
    const isFocused = useIsFocused();

    const [name, setName] = useState('Adams');
    const [vibes, setVibes] = useState([
        { img: 'images', name: 'Arya Star' },
        { img: 'images', name: 'Burna Boy' },
        { img: 'images', name: 'Wizkid' },
        { img: 'images', name: 'Davido' },
    ]);
    const [artists, setArtists] = useState([]);
    const [playlist, setPlaylist] = useState([]);
    const [playlist2, setPlaylist2] = useState([]);

    const [uri, setUri] = useState(null);
    const [songName, setSongName] = useState(null);
    const [songImg, setSongImg] = useState(null);
    const [songArtist, setSongArtist] = useState(null);
    const [userData, setUserData] = useState([]);


    useEffect(() => {
        getArtists();
        getPlaylist();
        
        if (isFocused) {
            handleRefresh();
        }
    }, [isFocused]);

    function handleRefresh() {
        getUserData().then((dataJSON) => {
            setUserData(dataJSON);
            setName(dataJSON.name.split(' ')[1])
        });
    };

    const [lastPlaybackPosition, setLastPlaybackPosition] = useState(0);
    const playselected = async (item) => {
        setSongArtist(item.track.album.artists[0].name)
        setSongImg(item.track.album.images[0].url)
        setSongName(item.track.name)

        try {
            if (sound !== null) {
                await sound.stopAsync();
            }

            const { sound: newSound } = await Audio.Sound.createAsync(
                { uri: item.track.preview_url },
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


    const getArtists = () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'd46ad28ad5msh4d381300d03945bp151478jsn3a08154e08ba',
                'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
            }
        };

        fetch('https://spotify81.p.rapidapi.com/artists?ids=2w9zwq3AktTeYYMuhMjju8%2C5wyWp867LWGjFmYZXVSFnZ%2C2y1VzMKAa5nmfXKtJL9jnj%2C0L3wrFI3QcbXAvFL7IaPQX%2C6CPZWzcKiOKkHn4L2XI4i2%2C51DevdOxIJin6DB1FXJpD1', options)
            .then(response => response.json())
            .then(response => {
                setArtists(response.artists);
                // console.log(response);
            })
            .catch(err => console.error(err));
    }

    const getPlaylist = () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'd46ad28ad5msh4d381300d03945bp151478jsn3a08154e08ba',
                'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
            }
        };

        if (!fetched) {
            fetch('https://spotify81.p.rapidapi.com/playlist?id=37i9dQZF1DXcBWIGoYBM5M', options)
                .then(response => response.json())
                .then(response => {
                    setPlaylist(response.tracks.items);
                    setUri(response.tracks.items[0].track.preview_url);
                    setSongArtist(response.tracks.items[0].track.album.artists[0].name)
                    setSongImg(response.tracks.items[0].track.album.images[0].url)
                    setSongName(response.tracks.items[0].track.name)
                }).then(() => {
                    fetch('https://spotify81.p.rapidapi.com/playlist?id=37i9dQZF1DX4WYpdgoIcn6', options)
                        .then(response => response.json())
                        .then(response => {
                            setPlaylist2(response.tracks.items);
                            setFetch(true);
                        })
                        .catch(err => console.error(err));
                })
                .catch(err => console.error(err));
        }
    };

    const [lastBackPressTime, setLastBackPressTime] = useState(0);

//   handle backpress close app
//   useEffect(() => {
//     const backHandler = BackHandler.addEventListener(
//       'hardwareBackPress',
//       () => {
//         const currentTime = new Date().getTime();
//         if (currentTime - lastBackPressTime <= 1000) {
//           BackHandler.exitApp();
//           return true;
//         }
//         setLastBackPressTime(currentTime);
//         ToastAndroid.show('Press back again to exit', ToastAndroid.SHORT);
//         return true;
//       }
//     );

//     return () => {
//       backHandler.remove();
//     };
//   }, [lastBackPressTime]);

    return (
        <>
            <View style={styles.homepageContainer}>
                {/* <Button title='play' onPress={()=>playSound()}/> */}
                {/* <Button title='pause' onPress={()=>pauseSound()}/> */}

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    alwaysBounceVertical={false}
                    horizontal={false}>
                    <View style={styles.homeinnerContainer}>
                        <View style={styles.flex}>
                            <Text style={styles.welcTxt}>Welcome, {name}!</Text>

                            <View style={styles.flexRight}>
                                {/* <TouchableOpacity style={styles.flexRightItm}>
                                    <Icon name="notifications" size={20} color="#fff" />
                                </TouchableOpacity> */}

                                <TouchableOpacity style={styles.flexRightItm} onPress={() => navigation.navigate("Settings")}>
                                    <Icon name="settings" size={20} color="#fff" />
                                </TouchableOpacity>

                            </View>
                        </View>

                        <Text style={styles.TxtWhite}>Vibes to get you started</Text>
                        <View>
                            <ScrollView
                                showsVerticalScrollIndicator={false}
                                alwaysBounceVertical={false}
                                horizontal={true}>

                                {artists.reverse().map((item, key) => (
                                    <TouchableOpacity key={key} style={styles.eachItem}>
                                        <Image source={{ uri: item.images[0].url }} style={styles.img} />
                                        <Text style={styles.textSmall}>{item.name}</Text>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </View>

                        <Text style={styles.TxtWhite}>Another vibes? Listen.</Text>
                        <View>
                            <ScrollView
                                showsVerticalScrollIndicator={false}
                                alwaysBounceVertical={false}
                                horizontal={true}>

                                {playlist2.slice(0, 10).map((item, key) => (
                                    <TouchableOpacity key={key} style={styles.eachItem} onPress={() => {
                                        playselected(item);
                                        setUri(item.track.preview_url);

                                    }}>
                                        <Image source={{ uri: item.track.album.images[0].url }} style={styles.img} />
                                        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.textSmall}>{item.track.name}</Text>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </View>

                        <Text style={styles.TxtWhite}>Hit songs today.</Text>
                        <View>
                            <ScrollView
                                showsVerticalScrollIndicator={false}
                                alwaysBounceVertical={false}
                                horizontal={true}>

                                {playlist.slice(0, 10).map((item, key) => (
                                    <View key={key} style={styles.eachItem}>
                                        <Image source={{ uri: item.track.album.images[0].url }} style={styles.img} />
                                        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.textSmall}>{item.track.name}</Text>
                                    </View>
                                ))}
                            </ScrollView>
                        </View>

                        <Text style={styles.TxtWhite}>Suggested artists</Text>
                        <View>
                            <ScrollView
                                showsVerticalScrollIndicator={false}
                                alwaysBounceVertical={false}
                                horizontal={true}>

                                {artists.map((item, key) => (
                                    <View key={key} style={styles.eachItem}>
                                        <Image source={{ uri: item.images[0].url }} style={styles.imgCirc} />
                                        <Text style={styles.textSmall}>{item.name}</Text>
                                    </View>
                                ))}
                            </ScrollView>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.controlContainer}>
                <PlayerController play={play} onPlay={playSound} onPause={pauseSound} artist={songArtist} name={songName} image={songImg} />
                {/* <Text style={styles.txt}>PlayerController</Text> */}
                <BottomNav />
            </View>
        </>
    )
}

export default HomePage