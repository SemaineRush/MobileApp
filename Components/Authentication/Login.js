import React from 'react';
import { View, Text, Button } from 'react-native';
import { AuthHeader } from '../Common/Headers';

class Login extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <AuthHeader/>
                <Text>Login</Text>
                <Button
                    title="Register"
                    onPress={() => navigate('Register')}
                />
            </View>
        );
    }
}
 
export default Login;