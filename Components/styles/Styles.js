import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, Dimensions } from 'react-native';

export let { height, width } = Dimensions.get('window');

const ConstantsStyle = StyleSheet.create({
  statusBar: {
    paddingTop: Constants.statusBarHeight
  }
})

const Colors = StyleSheet.create({
  black: {
    color: '#2C2C54'
  },
  white: {
    color: '#FFFFFF'
  },
  lightGrey: {
    color: '#D4D4DD'
  },
  grey: {
    color: '#888888'
  },
  purple: {
    color: '#A72C7D'
  },
  darkPurple: {
    color: '#862766'
  },
})

const BackgroundColors = StyleSheet.create({
  white: {
    backgroundColor: '#FFFFFF'
  },
  purple: {
    backgroundColor: '#A72C7D'
  },
  darkPurple: {
    backgroundColor: '#862766'
  },
  red: {
    backgroundColor: '#FD475E'
  },
  yellow: {
    backgroundColor: '#FFD02A'
  },
  lightBlue: {
    backgroundColor: '#8387FF'
  },
  blue: {
    backgroundColor: '#605DD3'
  },
  green: {
    backgroundColor: '#00FF00'
  },
  black: {
    backgroundColor: '#2C2C54'
  }
})

const Texts = StyleSheet.create({
  h1: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    color: '#2C2C54'
  },
  h2: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
    textTransform: 'uppercase',
    color: '#2C2C54'
  },
  h3: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 22,
    textTransform: 'uppercase',
    color: '#444444'
  },
  h4: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    color: '#444444'
  },
  p: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: '#444444'
  },
  info: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: '#444444'
  }
})

export { Colors, BackgroundColors, Texts, ConstantsStyle };