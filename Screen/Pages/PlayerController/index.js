import React, { useEffect, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import styles from './Styles'
import Icon from 'react-native-vector-icons/Ionicons';
import { Audio } from 'expo-av';


const PlayerController = () => {
    const sound = new Audio.Sound();
    const [play, setPlay] = useState(false);
    const [fav, setFav] = useState(false);


    const playBtn = () => {
        if (play) {
            setPlay(false);
        } else {
            setPlay(true)
            playmusic()
        }
    }

    const favBtn = () => {
        if (fav) {
            setFav(false);
        } else {
            setFav(true)

        }
    }

    return (
        <View style={styles.controllContainer}>
            <View style={styles.flex}>
                <Image style={styles.img} />
                <View style={styles.block}>
                    <Text style={styles.txtBig}>Yoga</Text>
                    <Text style={styles.txt}>Asake</Text>
                </View>
            </View>

            <View style={styles.flex}>
                <TouchableOpacity style={styles.eachItem}>
                    <Icon name="filter" size={25} color="#fff" />
                </TouchableOpacity>



                {play ? (
                    <TouchableOpacity style={styles.eachItem} onPress={() => playBtn()}>
                        <Icon name="pause" size={25} color="#fff" />
                    </TouchableOpacity>
                ) : (
                        <TouchableOpacity style={styles.eachItem} onPress={() => playBtn()}>
                        <Icon name="play" size={25} color="#fff" />
                    </TouchableOpacity>
                )}

                {fav ? (
                    <TouchableOpacity style={styles.eachItem} onPress={() => favBtn()}>
                        <Icon name="heart" size={25} color="#A10C0C" />
                    </TouchableOpacity>
                ) : (
                        <TouchableOpacity style={styles.eachItem} onPress={() => favBtn()}>
                            <Icon name="heart-outline" size={25} color="#fff" />
                        </TouchableOpacity>       
                )}

            </View>

        </View>
    )
}

export default PlayerController