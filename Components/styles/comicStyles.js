import React from 'react';
import { StyleSheet } from 'react-native';
import { height, width } from './Styles';

const styles = StyleSheet.create({
  wrap: {
    flex: 1
  },
  page: {
    height: height * 0.95
  },
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
    position: 'relative',
    zIndex: 3
  },
  videoLink: {
    resizeMode: 'center',
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
    height: 300,
    backgroundColor: '#DCADFF',
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
    resizeMode: 'center',
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
    paddingBottom: 20,
    position: 'relative',
    zIndex: 3
  },
  socialMediaIcon: {
    resizeMode: 'center',
    height: width / 6,
    width: width / 6,
    marginHorizontal: 2,
  },
  yt: {
    width: width / 4
  },
  voteContainer: {
    height: height * 0.1,
    width: width,
    backgroundColor: '#FE75B8',
    borderWidth: 3,
    borderColor: 'black',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  voteButton: {
    position: 'relative',
    margin: 5,
    alignItems: 'center',
    borderWidth: 4,
    borderColor: 'black',
    backgroundColor: 'white',
    paddingVertical: height * 0.015,
    paddingHorizontal: width / 8,
    zIndex: 1
  },
  voteButtonShadow: {
    position: 'absolute',
    paddingVertical: height * 0.015,
    paddingHorizontal: width / 8,
    borderWidth: 4,
    borderColor: 'black',
    backgroundColor: 'black',
    zIndex: 0,
    top: 10,
    left: 10
  },
  voteButtonText: {
    fontFamily: 'RobotoMono-Bold',
    fontSize: 18,
  },
  backButton: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    padding: 5,
    borderColor: 'black',
    backgroundColor: 'white',
    zIndex: 1
  },
  backButtonShadow: {
    position: 'absolute',
    borderWidth: 4,
    borderColor: 'black',
    backgroundColor: 'black',
    zIndex: 0,
    padding: 5,
    top: 3,
    left: 3
  },
  backButtonText: {
    fontFamily: 'RobotoMono-Bold',
    fontSize: 18,
  },
  back: {
    position: 'absolute',
    left: 15,
    top: (height * 0.1) / 5
  }
})

const resultsStyles = StyleSheet.create({
  view: {
    flex: 1,
    height: height,
    width: width
  },
  head: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6954EB',
    borderColor: '#251F1F',
    borderWidth: 5,
    padding: 25,
    paddingBottom: 0,
    flex: 1
  },
  headText: {
    fontFamily: 'RobotoMono-Bold',
    fontSize: 65,
    color: '#fff',
    textTransform: 'uppercase'
  },
  main: {
    flex: 5,
    alignItems: 'center'
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
  footer: {
    backgroundColor: '#FFC500',
    borderColor: '#251F1F',
    borderWidth: 5,
    padding: 20,
    alignItems: 'center'
  },
  footerTitle: {
    color: 'black',
    fontFamily: 'RobotoMono-Bold',
    textTransform: 'uppercase',
    fontSize: 20,
    width: width * 0.8
  },
  percentsContainer: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#251F1F',
    borderWidth: 5,
    borderRadius: 28,
    padding: 10,
    marginVertical: 10,
    width: width * 0.8,
    height: 56
  },
  progress: {
    position: 'absolute',
    backgroundColor: '#615FDB',
    width: '50%',
    height: '100%',
    top: 10,
    left: 10,
    borderTopLeftRadius: 28,
    borderBottomLeftRadius: 28,
  },
  candidateName: {
    color: '#fff',
    fontFamily: 'RobotoMono-Bold',
    fontSize: 20,
    textTransform: 'uppercase',
    marginLeft: 15
  },
  candidatePercent: {
    color: '#615FDB',
    fontFamily: 'RobotoMono-Bold',
    textTransform: 'uppercase',
    fontSize: 35,
    marginRight: 15
  },
  winnerContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8880FF',
    borderColor: '#251F1F',
    borderBottomWidth: 5,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19,
    padding: 15
  },
  winnerText: {
    color: '#fff',
    fontFamily: 'RobotoMono-Bold',
    textTransform: 'uppercase',
    fontSize: 29,
  },
  palm: {
    position: 'absolute',
    bottom: 0,
    width: width
  },
  centerBlock: {
    position: 'absolute',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 120,
    height: '77.5%',
    borderColor: '#251F1F',
    borderTopWidth: 5,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    bottom: 0
  },
  centerText: {
    fontFamily: 'RobotoMono-Bold',
    textTransform: 'uppercase'
  },
  arrowImage: {
    
  }
})

export { styles, resultsStyles }