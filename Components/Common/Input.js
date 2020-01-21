import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { width } from './../styles/Styles';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons'

const styles = StyleSheet.create({
  label: {
    textTransform: 'uppercase',
    fontWeight: '200',
    fontSize: 14,
    letterSpacing: 3,
    color: '#B2B2B2'
  },
  container: {
    width: width - 30,
    padding: 15
  },
  inputContainer: {
    borderBottomColor: '#E6E6E6'
  }
})

const CustomInput = props => {
  const value = useRef(null)
  const [security, setSecurity] = useState(false)

  useEffect(() => {
    setSecurity(props.security)
  }, [])

  return <Input
    ref={ value }
    placeholder={ props.placeholder }
    label={ props.label }
    labelStyle={ styles.label }
    containerStyle={ styles.container }
    inputContainerStyle={ styles.inputContainer }
    secureTextEntry={ security }
    rightIcon={
      <Icon
        name={ props.icon }
        size={ 24 }
        color={ props.iconColor }
        onPress={ props.press ? () => setSecurity(!security) : null }
      />
    }
  />
};

export default CustomInput;