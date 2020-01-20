import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

export let { height, width } = Dimensions.get('window');

export const Colors = StyleSheet.create({
  black: {
    color: '#444444'
  },
  lightGrey: {
    color: '#E6E6E6'
  },
  grey: {
    color: '#B2B2B2'
  },
  green: {
    color: '#4EC72A'
  }
})

export const BackgroundColors = StyleSheet.create({
  purple: {
    backgroundColor: '#A72C7D'
  },
  darkPurple: {
    backgroundColor: '#862766'
  },
  red: {
    backgroundColor: '#E4101C'
  },
  yellow: {
    backgroundColor: '#F9B100'
  }
})