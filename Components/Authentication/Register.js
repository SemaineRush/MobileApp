import React, { useState, useRef } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { PrimaryButton, SecondaryButton, LinkButton } from '../Common/Button';
import { Password, Email, Name } from '../Common/Input';
import { Colors, BackgroundColors, height, width } from '../Styles/Styles';
import { AuthHeader } from '../Common/Headers';
import Footer from '../Common/Footer';
import examples from './../Utils/examples'

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
                    onPress={ () => null }
                    title={ 'Connexion' }
                />
                <SecondaryButton
                    onPress={ () => null }
                    title={ 'S\'inscrire avec Office365' }
                />
            </View>
            <View style={ [styles.container, { marginBottom: 45 }] }>
                <Text style={ Colors.grey }>
                    Vous avez déjà de compte ?
                </Text>
                <LinkButton
                    onPress={ () => props.navigation.navigate('Login') }
                    title={ 'Connectez-vous.' }
                />
            </View>
            <Footer />
        </View>
    </ScrollView>
};

export default Register;