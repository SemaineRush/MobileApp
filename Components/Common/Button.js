import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { width } from './../styles/Styles';

const styles = StyleSheet.create({
  primaryButton: {
    width: (width * 80) / 100,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  primaryButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 17
  },
  linkButtonText: {
    color: '#444',
    textDecorationLine: 'underline',
    fontWeight: '300',
    fontSize: 15
  }
});

export const PrimaryButton = props => <TouchableOpacity
  onPress={ props.onPress }
  style={ [props.style, styles.primaryButton] }
>
  <Text style={ styles.primaryButtonText }>{ props.title }</Text>
</TouchableOpacity>;

export const LinkButton = props => <TouchableOpacity
  onPress={ props.onPress }
  style={ props.style }
>
  <Text style={ styles.linkButtonText }>{ props.title }</Text>
</TouchableOpacity>;