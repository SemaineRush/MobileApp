import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Colors } from '../Styles/Styles';

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 15
  },
  footerText: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: '#888888',
    position: 'absolute',
    bottom: 0
  }
})

const Footer = () => <View style={ styles.footer }>
  <Text style={ styles.footerText }>© Supinternet 2020 - All rights reserved.</Text>
</View>

export default Footer;