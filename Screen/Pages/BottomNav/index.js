import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './Styles'
import Icon from 'react-native-vector-icons/Ionicons';
import PlayerController from '../PlayerController';
import { useNavigation } from "@react-navigation/native";


const BottomNav = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.navContainer}>
            <TouchableOpacity style={styles.eachNav} onPress={()=> navigation.navigate("HomePage")}>
                <Icon name="home" size={20} color="#fff" />
                <Text style={styles.navTxt}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.eachNav} onPress={() => navigation.navigate("Search")}>
                <Icon name="search" size={20} color="#fff" />
                <Text style={styles.navTxt}>Search</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.eachNav} onPress={() => navigation.navigate("Library")}>
                <Icon name="library" size={20} color="#fff" />
                <Text style={styles.navTxt}>Your library</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BottomNav