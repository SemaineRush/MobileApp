import { StyleSheet, Dimensions } from 'react-native';

export let { height, width } = Dimensions.get('window');

export const Colors = StyleSheet.create({
  blue: {
    color: '#4237CA'
  },
  red: {
    color: '#E24B4F'
  },
  lightPurple: {
    color: '#7067E5'
  },
  purple: {
    color: '#584CEE'
  },
  darkPurple: {
    color: "#4137C7"
  },
  darkBlue: {
    color: '#161154'
  },
  white: {
    color: '#fff'
  }
})

export const BackgroundColors = StyleSheet.create({
    blue: {
        backgroundColor: '#4237CA'
    },
    red: {
        backgroundColor: '#E24B4F'
    },
    lightPurple: {
        backgroundColor: '#7067E5'
    },
    purple: {
        backgroundColor: '#584CEE'
    },
    darkPurple: {
        backgroundColor: "#4137C7"
    },
    darkBlue: {
        backgroundColor: '#161154'
    },
    white: {
        backgroundColor: '#fff'
    }
})

export const Texts = StyleSheet.create({
  h1: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
  },
  h2: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
    textTransform: 'uppercase',
  },
  h3: {
    fontFamily: 'Montserrat-SemiBoldItalic',
    fontSize: 20,
  },
  h4: {
    fontFamily: 'Montserrat-SemiBoldItalic',
    fontSize: 18,
  },
  p: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    lineHeight: 24,
  },
  pBold: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    lineHeight: 24,
  },
  info: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
  }
})