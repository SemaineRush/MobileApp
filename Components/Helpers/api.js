import axios from 'react-native-axios';

export const api = axios.create({
    baseURL: 'https://testsamheroku.herokuapp.com/api',
    timeOut: 1000,
    headers: {
        "Accept": "application/json"
    }
});