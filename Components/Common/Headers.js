import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Texts, width } from '../Styles/Styles';

class AuthHeader extends React.Component {
    render() {
        return (
            <View style={ authStyles.container }>
                <View style={ authStyles.purpleCircle } />
                <Text style={ [Texts.h1, authStyles.title, authStyles.f30, authStyles.uppercase] }>{ this.props.h1 }</Text>
                <Text style={ [Texts.h2, authStyles.title] }>{ this.props.h2 }</Text>
            </View>
        );
    }
}

const authStyles = StyleSheet.create({
    container: {
        position: 'relative',
        height: 300,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 70
    },
    leftCircle: {
        width: 280,
        height: 280,
        borderRadius: 140,
        position: 'absolute',
        top: -70,
        left: -70,
        zIndex: 5,
    },
    rightCircle: {
        width: 350,
        height: 350,
        borderRadius: 350 / 2,
        backgroundColor: "#333",
        position: 'absolute',
        top: -100,
        right: -70,
        zIndex: 1,
    },
    icon: {
        width: 100,
        height: 100,
        shadowColor: '#FAFAFA',
        shadowOpacity: 0.07,
        shadowRadius: 50,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        zIndex: 10,
        position: 'absolute',
        top: 200,
        backgroundColor: '#fff',
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    f30: {
        fontSize: 30,
        zIndex: 10,
        textAlign: 'center',
    },
    uppercase: {
        textTransform: 'uppercase'
    },
    purpleCircle: {
        position: "absolute",
        width: width * 3,
        height: width * 3,
        borderRadius: width * 3 / 2,
        backgroundColor: '#828AF7',
        top: -(width * 2) - 325,
        right: -(width * 1.2)
    }
})

class RoundPurpleBG extends React.Component {
    render() {
        return (
            <View style={ purpleBgStyles.purpleBg }></View>
        );
    }
}

let roundWidth = width * 3

const purpleBgStyles = StyleSheet.create({
    purpleBg: {
        backgroundColor: '#828AF7',
        position: 'absolute',
        top: -roundWidth + 120,
        left: -roundWidth / 2 + 140,
        width: roundWidth,
        height: roundWidth,
        borderRadius: roundWidth / 2,
    }
})

export { AuthHeader, RoundPurpleBG };
