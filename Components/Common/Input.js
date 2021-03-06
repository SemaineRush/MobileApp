import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { BackgroundColors, width } from '../styles/Styles';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { isEmail } from 'validator';
import regex from '../utils/regex';

const styles = StyleSheet.create({
  label: {
    textTransform: 'uppercase',
    fontFamily: 'Montserrat-Light',
    fontWeight: '200',
    fontSize: 14,
    letterSpacing: 3,
    color: '#B2B2B2'
  },
  container: {
    width: width - 30,
    marginBottom: 60,
    position: 'relative'
  },
  inputContainer: {
    borderBottomColor: '#E6E6E6'
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  secondAdornment: {
    position: 'absolute',
    right: 30
  }
})

const CheckError = (field, value) => {
  switch (field) {
    case "Name":
      return regex.number.test(value) || regex.nameSpecialChar.test(value) || value.length < 2 || value.length > 255;
    case "Email":
      return !isEmail(value) || !regex.supAddress.test(value) || value === '';
    case "Password":
      return !regex.lowercase.test(value)
        || !regex.uppercase.test(value)
        || !regex.number.test(value)
        || value.length < 8
        || value.length > 255

    default:
      return true;
  }
};

const Name = props => {
  const [error, setError] = useState(undefined)

  return <Input
    ref={ props.reference }
    placeholder={ props.placeholder }
    label={ props.label }
    labelStyle={ styles.label }
    containerStyle={ styles.container }
    inputContainerStyle={ styles.inputContainer }
    onChangeText={ text => props.setName(text) }
    onBlur={ () => {
      setError(CheckError('Name', props.name))
    } }
    rightIcon={ error ? <View style={ [styles.dot, BackgroundColors.red] } /> : null }
  />
};

const Email = props => {
  const [error, setError] = useState(undefined)

  return <Input
    ref={ props.reference }
    placeholder={ props.placeholder }
    label={ 'Adresse email' }
    labelStyle={ styles.label }
    containerStyle={ styles.container }
    inputContainerStyle={ styles.inputContainer }
    onChangeText={ text => props.setEmail(text) }
    onBlur={ () => {
      setError(CheckError('Email', props.email))
    } }
    rightIcon={ error ? <View style={ [styles.dot, BackgroundColors.red] } /> : null }
  />
};

const Password = props => {
  const [error, setError] = useState(undefined)
  const [security, setSecurity] = useState(true)

  const checkPassword = () => {
    props.confirmPassword
      ? props.password !== props.confirmPassword
        ? setError(true)
        : setError(false)
      : setError(CheckError('Password', props.password));
  }

  return <Input
    ref={ props.reference }
    placeholder={ props.placeholder }
    label={ props.label }
    labelStyle={ styles.label }
    containerStyle={ styles.container }
    inputContainerStyle={ styles.inputContainer }
    secureTextEntry={ security }
    onChangeText={ text => props.setPassword(text) }
    onBlur={ () => {
      checkPassword()
    } }
    rightIcon={ <>
      { error === false
        ? <View style={ [styles.dot, styles.secondAdornment, BackgroundColors.green] } />
        : error === true
          ? <View style={ [styles.dot, styles.secondAdornment, BackgroundColors.red] } />
          : null }
      { security
        ? <Icon
          name={ 'visibility-off' }
          size={ 24 }
          color={ '#888888' }
          onPress={ () => setSecurity(!security) }
        />
        : <Icon
          name={ 'visibility' }
          size={ 24 }
          color={ '#888888' }
          onPress={ () => setSecurity(!security) }
        /> }
    </> }
  />
};

export { Name, Email, Password, CheckError };