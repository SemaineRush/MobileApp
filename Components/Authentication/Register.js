import React from 'react';
import { View, Text } from 'react-native';
import { AuthHeader } from '../Common/Headers';

class Register extends React.Component {
    render() { 
        return (
            <View>
                <AuthHeader title="Hello, nouveau membre ? Rejoignez-nous" />
            </View>
        );
    }
}
 
export default Register;