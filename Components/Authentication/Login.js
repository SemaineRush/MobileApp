import React from 'react';
import { View, Text } from 'react-native';
import { PrimaryButton, LinkButton } from '../Common/Button';
import { BackgroundColors } from '../styles/Styles';
import { AuthHeader } from '../Common/Headers';

class Login extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <AuthHeader />
                <Text>Login</Text>
                <PrimaryButton
                    onPress={ () => null }
                    style={ BackgroundColors.darkPurple }
                    title={ 'Connexion' }
                />
                <LinkButton
                    onPress={ () => null }
                    title={ 'Inscrivez-vous.' }
                />
            </View>
        );
    }
}

export default Login;