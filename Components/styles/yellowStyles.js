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