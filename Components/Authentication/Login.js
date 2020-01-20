import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { PrimaryButton } from '../Common/Button';
import { BackgroundColors } from './../styles/Colors'

class Login extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Login</Text>
                <PrimaryButton
                    onPress={ () => null }
                    style={ BackgroundColors.darkPurple }
                    title={ 'Click Me' }
                />
            </View>
        );
    }
}

export default Login;