import React, { useEffect, useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import LottieView from 'lottie-react-native';
import styles from './Styles';

const InitPage = () => {
    const navigation = useNavigation();
    const [artistList, setArtistList] = useState([
        { artist: 'burna0', id: '1' },
        { artist: 'burna1', id: '2' },
        { artist: 'burna2', id: '3' },
        { artist: 'burna3', id: '4' },
        { artist: 'burna4', id: '5' },
        { artist: 'burna6', id: '6' },
    ]);

    const [artists, setArtists] = useState([])
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getArtists();
    }, []);

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
                if (response.artists.length > 0) {
                    setLoaded(true);
                }
                // console.log(response);
            })
            .catch(err => console.error(err));
    }

    return (
        <>
            <View style={styles.container}>
                <StatusBar style="light" />

                <View style={styles.innerContainer}>
                    <Text style={styles.bigTxt}>Select your favourite artists.</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Search' />
                    {loaded ? (
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            alwaysBounceVertical={false}
                        // horizontal={true}
                        >

                            <View style={styles.arrayContainer}>
                                {artists.reverse().map((item, key) => (
                                    <View key={key} style={styles.eachItem}>
                                        <Image source={{ uri: item.images[0].url }} style={styles.imgCirc} />
                                        <Text style={styles.textSmall}>{item.name}</Text>
                                    </View>
                                ))}
                            </View>

                        </ScrollView>
                    ) : (
                            <View style={styles.centerinParent}>
                                <Text style={styles.textSmall}>Please wait, Loading.....</Text>
                                <LottieView
                                    source={require('../../../assets/anim/loadingPlay.json')}
                                    autoPlay
                                    loop
                                />
                        </View>
                    )}

                </View>

                <TouchableOpacity onPress={() => navigation.navigate('HomePage')} style={styles.skipBtn}>
                    <Text>Skip</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default InitPage