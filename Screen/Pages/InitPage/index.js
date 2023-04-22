import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
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
    ])

    return (
        <>
            <View style={styles.container}>
                <StatusBar style="light" />

                <View style={styles.innerContainer}>
                    <Text style={styles.bigTxt}>Select your favourite artists.</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Search' />
                    
                    <View style={styles.arrayContainer}>
                        {artistList.map((index, key) => (
                            <View key={key} style={styles.eachArrayContainer}>
                                <View style={styles.artistImg}></View>
                                <Text style={styles.artistName}>{index.artist }</Text>
                            </View>
                        ))}
                    </View>
                </View>

                <TouchableOpacity onPress={console.log('skipped')} style={styles.skipBtn}>
                    <Text>Skip</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default InitPage