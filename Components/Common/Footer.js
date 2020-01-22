import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Colors } from '../Styles/Styles';

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    paddingVertical: 15,
  },
  footerText: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: '#888888'
  }
})

const Footer = () => <View style={ styles.footer }>
  <Text style={ styles.footerText }>© Supinternet 2020 - All rights reserved.</Text>
</View>

export default Footer;