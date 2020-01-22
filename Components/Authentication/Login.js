import React, { useState, useRef } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { PrimaryButton, SecondaryButton, LinkButton } from '../Common/Button';
import { Password, Email } from '../Common/Input';
import { Colors, BackgroundColors, height } from '../styles/Styles';
import { AuthHeader } from '../Common/Headers';
import Footer from '../Common/Footer';

const styles = StyleSheet.create({
    view: {
        flex: 1,
        minHeight: height,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const Login = props => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { navigate } = props.navigation;


    return <ScrollView contentContainerStyle={ [BackgroundColors.white, styles.view] }>
        <AuthHeader title='Hello, connectez-vous à votre espace.' />
        <View style={ styles.container }>
            <Email
                reference={ emailRef }
                email={ email }
                setEmail={ setEmail }
            />
            <Password reference={ passwordRef } password={ password } setPassword={ setPassword } />
            <PrimaryButton
                onPress={ () => navigate('CandidatesList') }
                title={ 'Connexion' }
                disabled={ false }
            />
        </View>
        <SecondaryButton
            onPress={ () => null }
            style={ BackgroundColors.blue }
            title={ 'Se connecter avec Office365' }
            disabled={ false }
        />
        <View style={ styles.container }>
            <Text
                style={ Colors.grey }
            >
                Vous n’avez pas de compte ?
                    </Text>
            <LinkButton
                onPress={ () => props.navigate('Register') }
                title={ 'Inscrivez-vous.' }
            />
        </View>
        <Footer />
    </ScrollView>
};

export default Login;