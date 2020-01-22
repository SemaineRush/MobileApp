import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BackgroundColors, width } from '../styles/Styles';

class AuthHeader extends React.Component {
    render() {
        return (
            <View style={ authStyles.container }>
                <View style={ [authStyles.leftCircle, BackgroundColors.purple] }></View>
                <LinearGradient start={ [0.0, 0.5] } end={ [1.0, 0.5] } colors={ ['#A72C7D', '#E4101C', '#F9B100'] } style={ authStyles.rightCircle }></LinearGradient>
                <Text style={ authStyles.title }>{ this.props.title }</Text>
                <View style={ authStyles.icon }>
                    <Image source={ require('../../assets/folder.png') } />
                </View>
            </View>
        );
    }
}

const authStyles = StyleSheet.create({
    container: {
        position: 'relative',
        height: 350,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
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
    title: {
        position: 'absolute',
        top: 70,
        width: 280,
        color: "#fff",
        fontSize: 23,
        zIndex: 10,
        textAlign: 'center',
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
