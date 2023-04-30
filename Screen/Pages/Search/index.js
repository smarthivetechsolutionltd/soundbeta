import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from './Styles';

const SearchPage = () => {

    const [name, setName] = useState('Adams');

    
  return (
      <View style={styles.searchContainer}>
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
          <Text>SearchPage</Text>
    </View>
  )
}

export default SearchPage