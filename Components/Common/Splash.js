import React from 'react'
import { StyleSheet, View, Image, ActivityIndicator } from 'react-native'
import { BackgroundColors, width } from './../styles/Styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  logo: {
    position: 'relative',
    zIndex: 3,
    flex: 1,
    width: width / 2,
    resizeMode: 'contain'
  },
  circle: {
    position: 'absolute',
    width: width * 3,
    height: width * 3,
    borderRadius: width * 3
  },
  top: {
    zIndex: 2,
    bottom: width * 1.8
  },
  secondTop: {
    zIndex: 1,
    bottom: width * 1.45,
    right: -(width - (width * 0.2))
  },
  rightBottom: {
    zIndex: 2,
    top: width,
    right: -(width * 2.7)
  },
  leftBottom: {
    zIndex: 1,
    top: width * 1.1,
    right: 0
  }
})
const Splash = () => <View style={ styles.container }>
  <View style={ [styles.circle, BackgroundColors.blue, styles.secondTop] } />
  <View style={ [styles.circle, BackgroundColors.lightBlue, styles.top] } />
  <View style={ [styles.circle, BackgroundColors.red, styles.rightBottom] } />
  <View style={ [styles.circle, BackgroundColors.yellow, styles.leftBottom] } />
  <Image source={ require('./../../assets/logo.png') } style={ styles.logo } />
  <ActivityIndicator />
</View>

export default Splash