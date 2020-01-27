import axios from 'react-native-axios';
import { AsyncStorage } from 'react-native';

const api = axios.create({
    baseURL: 'https://testsamheroku.herokuapp.com/api',
    timeOut: 1000,
    headers: {
        "Accept": "application/json"
    }
});

const getToken = async () => {
    try {
        return await AsyncStorage.getItem("token")
    } catch (error) {
        console.log("Something went wrong", error);
        return null
    }
}

const storeToken = async token => {
    try {
        await AsyncStorage.setItem("token", token)
    } catch (error) {
        console.log("Something went wrong", error);
        return null
    }
}

export { api, storeToken, getToken };