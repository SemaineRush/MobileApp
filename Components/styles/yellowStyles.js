import React from 'react';
import { StyleSheet } from 'react-native';
import { height, width } from './Styles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFD02A',
    flexGrow: 1,
  },
  AllLeft: {
    marginLeft: width * 0.05,
  },
  header_text: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: height * 0.05,
  },
  colorWhite: {
    color: "#fff",
  },
  header_textFirst: {
    fontSize: 17,
    fontFamily: 'Montserrat-Bold',
  },
  header_textSecond: {
    fontSize: 16,
    marginTop: height * 0.001,
    fontFamily: 'Montserrat-Bold',
  },
  chevron: {
    color: "#fff",
    fontSize: 25,
    marginTop: height * 0.051,
  },
  allSocial_network: {
    flexDirection: 'row',
    marginTop: height * 0.045
  },
  social_network: {
    width: 22,
    height: 22,
    borderRadius: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialNetworkImage: {
    width: '50%',
    resizeMode: 'contain'
  },
  leftNetwork: {
    marginLeft: 5,
  },
  character: {
    width: 204,
    height: 272,
    position: 'absolute',
    right: 0,
    marginTop: height * 0.08,
  },
  bubbles: {
    position: 'absolute',
    right: -(width * 0.02),
    marginTop: height * 0.05,
    zIndex: -1
  },
  section: {
    backgroundColor: 'white',
    marginTop: height * 0.03,
    textAlign: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderWidth: 0.5,
    borderColor: 'white',
  },
  character_resum: {
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
    fontSize: 17,
    paddingTop: height * 0.04,
    paddingHorizontal: width / 8
  },
  h4: {
    paddingTop: 50,
    fontSize: 22,
    color: '#2F2E5D',
    fontFamily: 'Montserrat-Bold',
  },
  bold: {
    fontWeight: 'bold',
  },
  explain: {
    fontSize: 18,
    marginTop: height * 0.01,
  },
  colorGrey: {
    color: '#444444',
    fontWeight: 'bold',
  },
  center_allMenu: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangle: {
    backgroundColor: '#888888',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#FFD02A',
    width: width * 0.9,
    height: height * 0.3,
    marginTop: height * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  rectangleImage: {
    width: width * 0.9,
    resizeMode: 'contain',
    marginTop: height * 0.1
  },
  afterRectangle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    width: width * 0.9,
    marginTop: 10
  },
  first_textAfterRectangle: {
    marginTop: height * 0.02,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#615AD3',
    width: width * 0.9,
    height: 52,
    borderRadius: 50,
    marginTop: height * 0.05,
    elevation: 5,
  },

  btnText: {
    fontSize: 17,
    fontFamily: 'Montserrat-Bold',
    color: 'white',
  },
});

export const resultsStyles = StyleSheet.create({
  container: {
    backgroundColor: '#FFD02A',
    flex: 1,
    height: height,
    width: width,
    alignItems: 'center',
  },
  header: {
    position: 'absolute',
    top: height * 0.05,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstText_contain: {
    color: '#5391FF',
    fontSize: 75,
    fontFamily: 'Montserrat-Bold',
    marginTop: 3
  },
  secondText_contain: {
    color: 'white',
    fontSize: 75,
    fontFamily: 'Montserrat-Bold',
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#615AD3',
    width: width * 0.9,
    height: 52,
    borderRadius: 50,
    bottom: height * 0.05,
    position: 'absolute',
    marginLeft: width * 0.05,
  },
  btnText: {
    fontSize: 17,
    fontFamily: 'Montserrat-Bold',
    color: 'white',
  },
  character: {
    width: width * 1.2,
    height: height * 0.7,
    position: 'absolute',
    bottom: 0,
    resizeMode: 'contain'
  },
  bulle1: {
    height: 175.18,
    width: 329.86,
    position: 'absolute',
    marginTop: height * 0.15,
    left: -(width * 0.235)
  },
  bulle2: {
    height: 215,
    width: 329.86,
    position: 'absolute',
    marginTop: height * 0.23,
    right: -165,
  },
  bulle3: {
    height: 230,
    width: 329.86,
    position: 'absolute',
    marginTop: height * 0.615,
    right: -(width * 0.1),
  },
  bulle4: {
    height: 240,
    width: 140,
    position: 'absolute',
    marginTop: height * 0.51,
    marginLeft: 15,
  },
});