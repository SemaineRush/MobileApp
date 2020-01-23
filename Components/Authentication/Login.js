import React, { useState, useEffect, useRef } from 'react';
import { AsyncStorage, StyleSheet, ScrollView, View, Text } from 'react-native';
import { PrimaryButton, SecondaryButton, LinkButton } from '../Common/Button';
import { CheckError, Password, Email } from '../Common/Input';
import { Colors, BackgroundColors, height, width } from '../styles/Styles';
import { AuthHeader } from '../Common/Headers';
import { Footer } from '../Common/Footer';
import examples from '../utils/examples';
import { api } from '../helpers/api';

const placeholder = examples[Math.floor(Math.random() * examples.length)]

const styles = StyleSheet.create({
    view: {
        flex: 1,
        width: width,
        minHeight: height,
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 35,
    }
});

const getToken = async () => {
    let token = ''
    try {
        token = await AsyncStorage.getItem("token") || 'none'
    } catch (error) {
        console.log("Something went wrong", error);
    }

    return token
}

const storeToken = async token => {
    try {
        await AsyncStorage.setItem("token", token);
    } catch (error) {
        console.log("Something went wrong", error);
    }
}

const sendForm = (email, password, setStateRequest) => {

    if (!CheckError("Email", email) && !CheckError("Password", password)) {
        api.post('/auth/login', {
            username: email,
            password: password
        }).then(json => {
            console.log('Success')

            storeToken(json.data.token)

            setStateRequest("Success")
        }).catch((err) => {
            console.log(err)
            setStateRequest("FAILURE")
        })
    } else {
        setStateRequest("FAILURE")
    }
};

const Login = props => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [stateRequest, setStateRequest] = useState(null)
    const { navigate } = props.navigation

    useEffect(() => {
        if (stateRequest === 'Success' && (getToken() !== 'none' || getToken() !== null)) {
            navigate('CandidatesList')
        }

        setTimeout(() => {
            setStateRequest(null)
        }, 3000);
    }, [stateRequest])

    return <ScrollView>
        <View style={ [BackgroundColors.white, styles.view] }>
            <AuthHeader h1='Bienvenue' h2='connectez-vous' />
            <View style={ [styles.container, { paddingTop: 0 }] }>
                <Email
                    placeholder={ placeholder.email }
                    reference={ emailRef }
                    email={ email }
                    setEmail={ setEmail }
                />
                <Password
                    label='mot de passe'
                    placeholder={ 'UnMotDePasse86' }
                    reference={ passwordRef }
                    password={ password }
                    setPassword={ setPassword }
                />
                <PrimaryButton
                    onPress={ () => sendForm(email, password, setStateRequest) }
                    title={ 'Connexion' }
                    style={
                        stateRequest === 'FAILURE'
                            ? BackgroundColors.red
                            : stateRequest === 'Success'
                                ? BackgroundColors.green
                                : null
                    }
                />
                <SecondaryButton
                    onPress={ () => null }
                    title={ 'Se connecter avec Office365' }
                />
            </View>
            <View style={ [styles.container, { marginBottom: 45 }] }>
                <LinkButton
                    onPress={ () => navigate('Recover') }
                    title={ 'Mot de passe oublié ?' }
                />
                <Text style={ Colors.grey }>
                    Vous n’avez pas de compte ?
                </Text>
                <LinkButton
                    onPress={ () => navigate('Register') }
                    title={ 'Inscrivez-vous.' }
                />
            </View>
            <Footer />
        </View>
    </ScrollView>
};

export default Login;