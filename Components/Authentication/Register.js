import React, { useState, useEffect, useRef } from 'react';
import { AsyncStorage, StyleSheet, ScrollView, View, Text } from 'react-native';
import { PrimaryButton, SecondaryButton, LinkButton } from '../Common/Button';
import { Password, Email, Name, CheckError } from '../Common/Input';
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
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 45
    }
});

const sendForm = (givenName, surname, email, password, validation, setStateRequest) => {

    if (!CheckError("Name", givenName) && !CheckError("Name", surname) && !CheckError("Email", email) && !CheckError("Password", password) && password === validation) {
        api.post('/auth/register', {
            firstname: givenName,
            lastname: surname,
            email: email,
            password: password
        }).then(() => {
            console.log('Success')
            setStateRequest("Success")
        }).catch((err) => {
            console.log(err)
            setStateRequest("FAILURE")
        })
    } else {
        setStateRequest("FAILURE")
    }
};

const Register = props => {
    const givenNameRef = useRef();
    const surnameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const validationRef = useRef();
    const [givenName, setGivenName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [validation, setValidation] = useState('')
    const [stateRequest, setStateRequest] = useState(null)
    const { navigate } = props.navigation

    useEffect(() => {
        setTimeout(() => {
            if (stateRequest === 'Success') {
                navigate('Login')
            } else {
                setStateRequest(null)
            }
        }, 3000);
    }, [stateRequest])

    return <ScrollView>
        <View style={ [BackgroundColors.white, styles.view] }>
            <AuthHeader h1='Nouveau ?' h2='inscrivez-vous' />
            <View style={ [styles.container, { paddingTop: 0 }] }>
                <Name
                    placeholder={ placeholder.surname }
                    label='Nom'
                    reference={ surnameRef }
                    name={ surname }
                    setName={ setSurname }
                />
                <Name
                    placeholder={ placeholder.givenName }
                    label='Prénom'
                    reference={ givenNameRef }
                    name={ givenName }
                    setName={ setGivenName }
                />
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
                <Password
                    label='confirmation du mot de passe'
                    placeholder={ 'UnMotDePasse86' }
                    reference={ validationRef }
                    password={ validation }
                    setPassword={ setValidation }
                    confirmPassword={ password }
                />
                <PrimaryButton
                    onPress={ () => sendForm(givenName, surname, email, password, validation, setStateRequest) }
                    title={ 'Inscription' }
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
                    title={ 'S\'inscrire avec Office365' }
                />
            </View>
            <View style={ [styles.container, { marginBottom: 45 }] }>
                <Text style={ Colors.grey }>
                    Vous avez déjà de compte ?
                </Text>
                <LinkButton
                    onPress={ () => navigate('Login') }
                    title={ 'Connectez-vous.' }
                />
            </View>
            <Footer />
        </View>
    </ScrollView>
};

export default Register;