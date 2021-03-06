import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { PrimaryButton, SecondaryButton, LinkButton } from '../Common/Button';
import { CheckError, Password, Email } from '../Common/Input';
import { Colors, BackgroundColors, height, width } from '../styles/Styles';
import { AuthHeader } from '../Common/Headers';
import { Footer } from '../Common/Footer';
import examples from '../utils/examples';
import { api, getToken, storeToken } from '../helpers/api';

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
        paddingVertical: 45,
    },
    forget: {
        position: 'absolute',
        right: 10,
        bottom: 30
    }
});

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
        getToken().then(value => {
            if (stateRequest === 'Success' && value !== null) {
                navigate('CandidatesList')
            }
        })

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
                <View style={ { position: 'relative' } }>
                    <Password
                        label='mot de passe'
                        placeholder={ 'UnMotDePasse86' }
                        reference={ passwordRef }
                        password={ password }
                        setPassword={ setPassword }
                    />
                    <LinkButton
                        onPress={ () => navigate('Recover') }
                        title={ 'Mot de passe oublié ?' }
                        style={ styles.forget }
                    />
                </View>
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
                    onPress={ () => navigate('Office') }
                    title={ 'Se connecter avec Office365' }
                />
            </View>
            <View style={ [styles.container, { marginBottom: 45 }] }>
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