import axios from 'react-native-axios';

export const api = axios.create({
    baseURL: 'https://testsamheroku.herokuapp.com/api',
    timeOut: 1000,
    headers: {
        "Accept": "application/json"
    }
});

export const getToken = async () => {
    let token = ''
    try {
        token = await AsyncStorage.getItem("token") || 'none'
    } catch (error) {
        console.log("Something went wrong", error);
    }

    return token
}

export const storeToken = async token => {
    try {
        await AsyncStorage.setItem("token", token);
    } catch (error) {
        console.log("Something went wrong", error);
    }
}