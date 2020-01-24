import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { BackgroundColors, height, width } from '../styles/Styles';

const styles = StyleSheet.create({
  view: {
    position: 'relative',
    minHeight: height,
  },
  container: {
    height: height,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  pola: {
    position: 'absolute',
    width: width * 1.25,
    resizeMode: 'contain',
    right: 0,
    top: -(height * 0.7),
    zIndex: 2
  },
  arrowDown: {
    position: 'absolute',
    width: width / 2.1,
    resizeMode: 'contain',
    left: -(width * 0.04),
    top: -(height / 3.15),
  },
  stripes: {
    position: 'absolute',
    width: width / 2,
    right: 0,
    top: 0
  },
  envelop: {
    resizeMode: 'contain',
    width: width / 4
  },
  envelopButton: {
    resizeMode: 'contain',
    position: 'absolute',
    width: width / 4,
    top: -(height / 6.5),
    zIndex: 2
  },
  envelopText: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 20
  },
  topBubble: {
    resizeMode: 'contain',
    position: 'absolute',
    width: width,
    top: -(height / 2.8)
  },
})

const Comic = () => {
  return <View style={ styles.view }>
    <Image style={ styles.pola } source={ require('./../../assets/Comic/pola-ombre.png') } />
    <View style={ [BackgroundColors.yellow, styles.container] }>
      <Image style={ styles.arrowDown } source={ require('./../../assets/Comic/fleche-bas.png') } />
      <TouchableOpacity style={ styles.envelopButton }>
        <Image style={ styles.envelop } source={ require('./../../assets/Comic/enveloppe.png') } />
        <Text>Votez</Text>
      </TouchableOpacity>
      <Image style={ styles.stripes } source={ require('./../../assets/Comic/stripes.png') } />
      <Image style={ styles.topBubble } source={ require('./../../assets/Comic/bulle-haut.png') } />
    </View>
    <View style={ [BackgroundColors.yellow, styles.container] }>
    </View>
  </View>
}

export default Comic