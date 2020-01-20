import React from 'react';
import { AuthHeader } from '../Common/Headers';
import { View, Text, Button, Alert } from 'react-native';
import { PrimaryButton } from '../Common/Button';
import { BackgroundColors } from './../styles/Colors'

class Login extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <AuthHeader/>
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