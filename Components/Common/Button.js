import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { width } from './../styles/Styles';

const styles = StyleSheet.create({
  primaryButton: {
    width: width - 30,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 26,
    padding: 15
  },
  primaryButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 17
  },
  primaryButtonDisable: {
    opacity: 0.33
  },
  linkButtonText: {
    color: '#615AD3',
    textDecorationLine: 'underline',
    fontWeight: '600',
    fontSize: 15
  }
});

export const PrimaryButton = props => <TouchableOpacity
  onPress={ props.onPress }
  style={ [props.style, styles.primaryButton] }
  disabled={ props.disabled }
>
  <Text
    style={ [styles.primaryButtonText, props.disabled ? styles.primaryButtonDisable : null] }
  >
    { props.title }
  </Text>
</TouchableOpacity>;

export const LinkButton = props => <TouchableOpacity
  onPress={ props.onPress }
  style={ props.style }
>
  <Text style={ styles.linkButtonText }>{ props.title }</Text>
</TouchableOpacity>;