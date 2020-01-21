import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Colors } from './../styles/Styles';

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    paddingVertical: 25,
  },
  footerText: {
    fontSize: 14,
    fontWeight: '200'
  }
})

const Footer = () => <View style={ styles.footer }>
  <Text style={ [styles.footerText, Colors.black] }>© Supinternet 2020 - All rights reserved.</Text>
</View>

export default Footer;