import React from 'react';
import { StyleSheet } from 'react-native';
import { height, width } from './Styles';

export const styles = StyleSheet.create({
  view: {
    position: 'relative',
  },
  headerContainer: {
    backgroundColor: '#FFC500',
    height: height,
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  },
  container: {
    height: height,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  pola: {
    position: 'absolute',
    width: width * 1.25,
    resizeMode: 'contain',
    right: 0,
    top: -(height * 0.79),
    zIndex: 2
  },
  polaText: {
    fontFamily: 'RobotoMono-Medium',
    position: 'absolute',
    textAlign: 'center',
    width: width * 0.4,
    top: height * 0.76,
    right: width * 0.3,
    zIndex: 3,
    fontSize: 25,
  },
  headerImage: {
    width: width * 1,
    resizeMode: 'contain',
  },
  arrowDown: {
    position: 'absolute',
    width: width / 2.1,
    resizeMode: 'contain',
    left: -(width * 0.04),
    top: -(height / 3.15),
  },
  stripes: {
    position: 'absolute',
    width: width / 2,
    right: 0,
    top: 0
  },
  envelop: {
    resizeMode: 'contain',
    position: 'absolute',
    width: width / 4,
    top: -(height / 6.5)
  },
  envelopText: {
    fontFamily: 'RobotoMono-Bold',
    position: 'absolute',
    textTransform: 'uppercase',
    fontSize: 20,
    top: height / 6.9
  },
  topBubble: {
    resizeMode: 'contain',
    position: 'absolute',
    width: width,
    top: -(height / 3)
  },
  square: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'black'
  },
  squareRow: {
    flex: 1,
    flexDirection: 'row'
  },
  squareColumn: {
    flex: 1,
    flexDirection: 'column'
  },
  resumeContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 2,
    padding: 30
  },
  resumeText: {
    fontFamily: 'RobotoMono-Bold',
    fontSize: 18
  },
  resumeTextEmphasis: {
    fontFamily: 'RobotoMono-Bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    marginTop: 25,
    fontSize: 20
  },
  videoContainer: {
    height: 225,
    width: width,
    backgroundColor: '#DCADFF',
    borderTopColor: 'black',
    borderBottomColor: 'black',
    borderTopWidth: 4,
    borderBottomWidth: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoLink: {
    resizeMode: 'contain',
    height: 200,
    width: width * 1.5
  },
  programContainer: {
    width: width,
    backgroundColor: '#F9F7E7',
    alignItems: 'center',
    padding: 5,
    borderBottomColor: 'black',
    borderBottomWidth: 4
  },
  programH1: {
    fontFamily: 'RobotoMono-Bold',
    fontSize: 40,
    textTransform: 'uppercase'
  },
  programH2: {
    fontFamily: 'RobotoMono-Bold',
    fontSize: 30,
    textTransform: 'uppercase'
  },
  programPart: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 5
  },
  programStep: {
    flex: 1,
    alignItems: 'center'
  },
  programIndex: {
    fontFamily: 'RobotoMono-Bold',
    fontSize: 78
  },
  programTotal: {
    fontFamily: 'RobotoMono-Bold',
    fontSize: 20,
    color: '#FF6900'
  },
  programInfo: {
    position: 'relative',
    padding: 20,
    flex: 1,
    alignItems: 'center',
    borderWidth: 4,
    borderColor: 'black',
    backgroundColor: 'white',
  },
  programText: {
    fontFamily: 'RobotoMono-Bold',
    fontSize: 18,
  },
  programShadow: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderWidth: 4,
    borderColor: 'black',
    backgroundColor: 'black',
    zIndex: -1,
    top: 6,
    left: 6
  },
  arrow: {
    resizeMode: 'contain',
    height: 100,
    width: width
  },
  chooseText: {
    fontFamily: 'RobotoMono-Regular',
    fontSize: 37,
  },
  chooseName: {
    fontFamily: 'RobotoMono-Regular',
    fontSize: 80,
    textTransform: 'uppercase'
  },
  footer: {
    position: 'relative',
    width: width,
    height: 300
  },
  mediaBubbleContainer: {
    position: 'absolute',
    top: 47,
    left: width * 0.3,
    zIndex: 3
  },
  mediaBubbleText: {
    fontFamily: 'RobotoMono-Bold',
    fontSize: 18,
  },
  mediaBubbleTextEmphasis: {
    textTransform: 'uppercase'
  },
  mediaBubble: {
    resizeMode: 'contain',
    width: width * 0.6,
    position: 'absolute',
    top: -155,
    left: width * 0.22,
    zIndex: 2
  },
  socialMediaContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#DCADFF',
    paddingBottom: 20
  },
  socialMediaIcon: {
    resizeMode: 'contain',
    height: width / 6,
    width: width / 6,
    marginHorizontal: 2
  },
  yt: {
    width: width / 4
  }
})