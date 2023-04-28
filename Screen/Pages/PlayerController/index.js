import React, { useEffect, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import styles from './Styles'
import Icon from 'react-native-vector-icons/Ionicons';
import { Audio } from 'expo-av';


const PlayerController = (props) => {
    
    return (
        <View style={styles.controllContainer}>
            <View style={styles.flex}>
                <Image style={styles.img} source={{ uri: props.image }} />
                <View style={styles.block}>
                    <Text style={styles.txtBig} numberOfLines={1} ellipsizeMode="tail" >{ props.name}</Text>
                    <Text style={styles.txt}>{props.artist}</Text>
                </View>
            </View>

            <View style={styles.flex}>
                {/* <TouchableOpacity style={styles.eachItem}>
                    <Icon name="filter" size={25} color="#fff" />
                </TouchableOpacity> */}



                {props.play ? (
                    <TouchableOpacity style={styles.eachItem} onPress={() => props.onPause()}>
                        <Icon name="pause" size={25} color="#fff" />
                    </TouchableOpacity>
                ) : (
                        <TouchableOpacity style={styles.eachItem} onPress={() => props.onPlay()}>
                        <Icon name="play" size={25} color="#fff" />
                    </TouchableOpacity>
                )}

                {props.fav ? (
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