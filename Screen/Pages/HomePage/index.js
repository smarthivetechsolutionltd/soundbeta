import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View, ScrollView, Image } from 'react-native';
import styles from './Styles';
import { useNavigation } from "@react-navigation/native";
import BottomNav from '../BottomNav';
import Icon from 'react-native-vector-icons/Ionicons';
import PlayerController from '../PlayerController';

const HomePage = () => {
    const [name, setName] = useState('Adams');
    const [vibes, setVibes] = useState([
        { img: 'images', name: 'Arya Star' },
        { img: 'images', name: 'Burna Boy' },
        { img: 'images', name: 'Wizkid' },
        { img: 'images', name: 'Davido' },
    ]);
    const [artists, setArtists] = useState([]);
    const [playlist, setPlaylist] = useState([]);
    const [playlist2, setPlaylist2] = useState([])


    useEffect(() => {
        getArtists();
        getPlaylist();
    }, []);

    const getArtists = () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'df57019a4bmshcb2cced679ec247p1f8ee4jsnb1ec827c7f23',
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
                'X-RapidAPI-Key': 'df57019a4bmshcb2cced679ec247p1f8ee4jsnb1ec827c7f23',
                'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
            }
        };

        fetch('https://spotify81.p.rapidapi.com/playlist?id=37i9dQZF1DXcBWIGoYBM5M', options)
            .then(response => response.json())
            .then(response => {
                setPlaylist(response.tracks.items)
            }).then(() => {
                fetch('https://spotify81.p.rapidapi.com/playlist?id=37i9dQZF1DX4WYpdgoIcn6', options)
                    .then(response => response.json())
                    .then(response => {
                        setPlaylist2(response.tracks.items)
                    })
                    .catch(err => console.error(err));
            })
            .catch(err => console.error(err));
    }

    return (
        <>

            <View style={styles.homepageContainer}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    alwaysBounceVertical={false}
                    horizontal={false}>
                    <View style={styles.homeinnerContainer}>
                        <View style={styles.flex}>
                            <Text style={styles.welcTxt}>Welcome, {name}!</Text>

                            <View style={styles.flexRight}>
                                <TouchableOpacity style={styles.flexRightItm}>
                                    <Icon name="notifications" size={20} color="#fff" />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.flexRightItm}>
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
                                    <View key={key} style={styles.eachItem}>
                                        <Image source={{ uri: item.images[0].url }} style={styles.img} />
                                        <Text style={styles.textSmall}>{item.name}</Text>
                                    </View>
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
                                    <View key={key} style={styles.eachItem}>
                                        <Image source={{ uri: item.track.album.images[0].url }} style={styles.img} />
                                        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.textSmall}>{item.track.name}</Text>
                                    </View>
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
                <PlayerController />
                {/* <Text style={styles.txt}>PlayerController</Text> */}
                <BottomNav />
            </View>
        </>
    )
}

export default HomePage