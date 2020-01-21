import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { PrimaryButton, LinkButton } from '../Common/Button';
import CustomInput from '../Common/Input';
import { Colors, BackgroundColors, height } from '../styles/Styles';
import { AuthHeader } from '../Common/Headers';
import Footer from '../Common/Footer'

const styles = StyleSheet.create({
    view: {
        flex: 1,
        minHeight: height,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

class Login extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView contentContainerStyle={ [BackgroundColors.white, styles.view] }>
                <AuthHeader title='Hello, connectez-vous à votre espace.' />
                <View style={ styles.container }>
                    <CustomInput label='adresse email' />
                    <CustomInput
                        label='mot de passe'
                        security={ true }
                        icon='visibility'
                        iconColor='#888888'
                        press={ true }
                    />
                    <PrimaryButton
                        onPress={ () => null }
                        style={ BackgroundColors.blue }
                        title={ 'Connexion' }
                        disabled={ false }
                    />
                </View>
                <View style={ styles.container }>
                    <Text
                        style={ Colors.grey }
                    >
                        Vous n’avez pas de compte ?
                    </Text>
                    <LinkButton
                        onPress={ () => navigate('Register') }
                        title={ 'Inscrivez-vous.' }
                    />
                </View>
                <Footer />
            </ScrollView>
        );
    }
}

export default Login;