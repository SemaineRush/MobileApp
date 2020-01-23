import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { BackgroundColors, Texts } from '../Styles/Styles';
import Icon from 'react-native-vector-icons/MaterialIcons'

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

const VoteFooter = props => <View style={ props.style }>
  <View style={ VoteFooterStyles.container }>
    <Icon name="person" color={ BackgroundColors.blue.backgroundColor } size={ 30 } style={ { marginRight: 10 } } />
    <Text style={ Texts.p }>Vote sécurisé, cybersécurité 100%</Text>
  </View>
  <View style={ VoteFooterStyles.container }>
    <Icon name="lock" color={ BackgroundColors.blue.backgroundColor } size={ 30 } style={ { marginRight: 10 } } />
    <Text style={ Texts.p }>Vote anonymat est préservé</Text>
  </View>
</View>

const VoteFooterStyles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: 'center',
    flexDirection: 'row',
  }
})


export { Footer, VoteFooter };