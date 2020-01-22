import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { BackgroundColors, width, height } from './../styles/Styles';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { isEmail } from 'validator';
import regex from './../Utils/regex';

const emailExamples = ["rick.astley@supinternet.fr",
  "sherlock.holmes@supinternet.fr",
  "optimus.prime@supinternet.fr",
  "mercredi.addams@supinternet.fr",
  "inigo.montoya@supinternet.fr",
  "groot.groot@supinternet.fr",
  "harry.potter@supinternet.fr",
  "hans.landa@supinternet.fr",
  "bilbo.baggins@supinternet.fr",
  "sarah.connor@supinternet.fr",
  "vito.corleone@supinternet.fr",
  "obi-wan.kenobi@supinternet.fr",
  "katniss.everdeen@supinternet.fr",
  "walter.sobchak@supinternet.fr",
  "rocky.balboa@supinternet.fr",
  "jules.winnfield@supinternet.fr",
  "peter.venkman@supinternet.fr",
  "forrest.gump@supinternet.fr",
  "hannibal.lecter@supinternet.fr",
  "jack.sparrow@supinternet.fr",
  "tony.stark@supinternet.fr",
  "marty.mcfly@supinternet.fr",
  "darth.vader@supinternet.fr",
  "tyler.durden@supinternet.fr",
  "john.mclane@supinternet.fr",
  "ellen.ripley@supinternet.fr",
  "han.solo@supinternet.fr",
  "james.bond@supinternet.fr",
  "indiana.jones@supinternet.fr"]

const placeholder = emailExamples[Math.floor(Math.random() * emailExamples.length)]

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
    case "Email":
      return !isEmail(value) || !regex.supAddress.test(value) || value === '';
    case "Password":
      return !regex.lowercase.test(value)
        || !regex.uppercase.test(value)
        || !regex.number.test(value)
        || value.length < 6
        || value.length > 255

    default:
      return true;
  }
};

export const Email = props => {
  const [error, setError] = useState(undefined)

  return <Input
    ref={ props.reference }
    placeholder={ placeholder }
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

export const Password = props => {
  const [error, setError] = useState(undefined)
  const [security, setSecurity] = useState(true)

  return <Input
    ref={ props.reference }
    placeholder={ 'Your password' }
    label={ 'mot de passe' }
    labelStyle={ styles.label }
    containerStyle={ styles.container }
    inputContainerStyle={ styles.inputContainer }
    secureTextEntry={ security }
    onChangeText={ text => props.setPassword(text) }
    onBlur={ () => {
      setError(CheckError('Password', props.password))
    } }
    rightIcon={ <>
      { error === false
        ? <View style={ [styles.dot, styles.secondAdornment, BackgroundColors.green] } />
        : error === true
          ? <View style={ [styles.dot, styles.secondAdornment, BackgroundColors.red] } />
          : null }
      <Icon
        name={ 'visibility' }
        size={ 24 }
        color={ '#888888' }
        onPress={ () => setSecurity(!security) }
      />
    </> }
  />
}