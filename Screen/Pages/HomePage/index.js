import React, { useState } from 'react'
import { Text, TouchableOpacity, View, ScrollView} from 'react-native';
import styles from './Styles';
import { useNavigation } from "@react-navigation/native";
import BottomNav from '../BottomNav';
import Icon from 'react-native-vector-icons/Ionicons';

const HomePage = () => {
    const [name, setName] = useState('Adams');
    const [vibes, setVibes] = useState([
        { img: 'images', name: 'Arya Star' },
        { img: 'images', name: 'Burna Boy' },
        { img: 'images', name: 'Wizkid' },
        { img: 'images', name: 'Davido' },
    ])
    return (
        <>
            <View style={styles.homepageContainer}>
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

                        {vibes.map((index, key) => (
                            <View key={key} style={styles.eachItem}>
                                <View style={styles.img}></View>
                                <Text style={styles.textSmall}>{index.name}</Text>
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

                        {vibes.map((index, key) => (
                            <View key={key} style={styles.eachItem}>
                                <View style={styles.img}></View>
                                <Text style={styles.textSmall}>{index.name}</Text>
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

                        {vibes.map((index, key) => (
                            <View key={key} style={styles.eachItem}>
                                <View style={styles.img}></View>
                                <Text style={styles.textSmall}>{index.name}</Text>
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

                        {vibes.map((index, key) => (
                            <View key={key} style={styles.eachItem}>
                                <View style={styles.imgCirc}></View>
                                <Text style={styles.textSmall}>{index.name}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </View>
            <BottomNav />
        </>
    )
}

export default HomePage