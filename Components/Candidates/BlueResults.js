import React from 'react';
import { BackgroundColors, Colors, Texts, width } from '../styles/blueStyles';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class BlueResults extends React.Component {
    render() { 
        return (
            <ScrollView>
                <TouchableOpacity style={styles.back} color={Colors.white.color} onPress={() => navigate('CandidatesList')}>
                    <Icon name="chevron-left" color={BackgroundColors.white.backgroundColor} size={30} />
                </TouchableOpacity>
                <View style={[BackgroundColors.blue, styles.mainView]}>
                    <Text style={[Texts.h1, Colors.white, {marginLeft: 30}]}>Résultats</Text>
                    <Text style={[Texts.h2, Colors.white, {marginLeft: 30}]}>MUNICIPALES SUP 2020</Text>
                    <Text style={[Texts.info, Colors.white, {opacity: 0.4, marginTop: 20, marginLeft: 30}]}>Votre nouveau maire :</Text>
                    <Image source={require('../../assets/guiralWin.png')} style={{width: width*0.60, height: width*0.43, marginTop: 30}} />
                    <Text style={[Texts.h1, styles.result]}>42%</Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    back: {
        position: 'absolute',
        left: 30,
        top: 30,
    },
    mainView: {
        paddingTop: 50,
    },
    result: {
        position: "absolute",
        right: 0,
        bottom: -20,
        fontSize: 70,
        color: "#fff",
    }
})
 
export default BlueResults;