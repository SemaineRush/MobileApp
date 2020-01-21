import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

export let { height, width } = Dimensions.get('window');

export const Colors = StyleSheet.create({
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
  }
})

export const BackgroundColors = StyleSheet.create({
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
  blue: {
    backgroundColor: '#605DD3'
  },
  green: {
    backgroundColor: '#00FF00'
  }
})