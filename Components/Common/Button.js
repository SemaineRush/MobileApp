import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { BackgroundColors, width } from '../Styles/Styles';

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
    fontFamily: 'Montserrat-Bold',
    fontSize: 17
  },
  primaryButtonDisable: {
    opacity: 0.33
  },
  secondaryButton: {
    width: width - 34,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 26,
    borderColor: '#605DD3',
    borderWidth: 2,
    padding: 15,
    marginTop: 30
  },
  secondaryButtonText: {
    color: '#605DD3',
    fontFamily: 'Montserrat-Bold',
    fontSize: 17
  },
  secondaryButtonDisable: {
    opacity: 0.33
  },
  linkButtonText: {
    color: '#615AD3',
    fontFamily: 'Montserrat-Bold',
    textDecorationLine: 'underline',
    fontSize: 15,
    marginVertical: 5
  }
});

export const PrimaryButton = props => <TouchableOpacity
  onPress={ props.onPress }
  style={ [BackgroundColors.blue, styles.primaryButton] }
  disabled={ props.disabled }
>
  <Text
    style={ [styles.primaryButtonText, props.disabled ? styles.primaryButtonDisable : null] }
  >
    { props.title }
  </Text>
</TouchableOpacity>;

export const SecondaryButton = props => <TouchableOpacity
  onPress={ props.onPress }
  style={ [BackgroundColors.white, styles.secondaryButton] }
  disabled={ props.disabled }
>
  <Text
    style={ [styles.secondaryButtonText, props.disabled ? styles.secondaryButtonDisable : null] }
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