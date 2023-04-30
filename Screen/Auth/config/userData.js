import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getUserData() {
    try {
        const jsonValue = await AsyncStorage.getItem('userData');
        const data = jsonValue != null ? JSON.parse(jsonValue) : null;
        return data;
    } catch (error) {
        console.log(error);
    }
}