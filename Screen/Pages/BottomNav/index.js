import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './Styles'
import Icon from 'react-native-vector-icons/Ionicons';
import PlayerController from '../PlayerController';


const BottomNav = () => {
    return (
        <View style={styles.navContainer}>
            {/* <PlayerController/> */}
            <TouchableOpacity style={styles.eachNav} onPress={()=> console.log('home')}>
                <Icon name="home" size={20} color="#fff" />
                <Text style={styles.navTxt}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.eachNav} onPress={() => console.log('search')}>
                <Icon name="search" size={20} color="#fff" />
                <Text style={styles.navTxt}>Search</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.eachNav} onPress={() => console.log('library')}>
                <Icon name="library" size={20} color="#fff" />
                <Text style={styles.navTxt}>Your library</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BottomNav