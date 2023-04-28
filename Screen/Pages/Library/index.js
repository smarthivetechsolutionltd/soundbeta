import React, { useState, useEffect } from 'react'
import { Text, View, ScrollView } from 'react-native'
import * as MediaLibrary from 'expo-media-library';
// import MusicFiles from 'react-native-get-music-files';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';

import styles from './Styles';


const Library = () => {

    const [localMusic, setLocalMusic] = useState([])

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
            artist: asset.author,
            album: asset.album,
            duration: asset.duration,
        }));
        // console.log(assets);
        setLocalMusic(mediaFiles)
        // you now have an array of media files, which you can use to display a list of songs or play them
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

            <ScrollView
                showsVerticalScrollIndicator={false}
                alwaysBounceVertical={false}
                horizontal={false}>
                <Text>Library</Text>
                    <View>
                        {localMusic.map((item, key) => (
                            <View key={key}>
                                <Text>{item.title.replace(/\.(mp3|aac|MP3)$/i, "")}</Text>
                            </View>
                        ))}
                </View>
            </ScrollView>
            </View>
        </>

    )
}

export default Library