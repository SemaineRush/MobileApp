import React, { useState, useRef } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { PrimaryButton, SecondaryButton, LinkButton } from '../Common/Button';
import { Password, Email } from '../Common/Input';
import { Colors, BackgroundColors, height, width } from '../Styles/Styles';
import { AuthHeader } from '../Common/Headers';
import { Footer } from '../Common/Footer';
import examples from './../Utils/examples';

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

const Login = props => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { navigate } = props.navigation

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
                    onPress={ () => null }
                    title={ 'Connexion' }
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