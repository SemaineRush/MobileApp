import React from 'react';
import { Platform, ActivityIndicator, StyleSheet, View, Image, AsyncStorage } from 'react-native';
import * as Font from 'expo-font';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './Components/Authentication/Login';
import Register from './Components/Authentication/Register';
import Recover from './Components/Authentication/Recover';
import Office from './Components/Authentication/Office';
import Candidate from './Components/Candidates/Candidate'
import CandidatesList from './Components/Votes/CandidatesList';
import Vote from './Components/Votes/Vote';
import BlueCandidate from './Components/Candidates/Blue';
import BlueResults from './Components/Candidates/BlueResults';

const MainNavigator = createStackNavigator({
  Login: { screen: Login },
  Register: { screen: Register },
  Recover: { screen: Recover },
  Office: { screen: Office },
  Candidate: { screen: Candidate },
  CandidatesList: { screen: CandidatesList },
  Vote: { screen: Vote },
  Blue: { screen: BlueCandidate },
  BlueResults: { screen: BlueResults },
}, {
  defaultNavigationOptions: {
    headerShown: false
  }
});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  state = {
    assetsLoaded: false,
  };

  async componentDidMount() {
    if (Platform.OS === 'ios') {
      await AsyncStorage.getAllKeys().then(keys => AsyncStorage.multiRemove(keys))
    } else {
      await AsyncStorage.clear()
    }

    await Font.loadAsync({
      'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
      'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
      'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
      'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
      'Montserrat-SemiBoldItalic': require('./assets/fonts/Montserrat-SemiBoldItalic.ttf'),
      'RobotoMono-Bold': require('./assets/fonts/RobotoMono-Bold.ttf'),
      'RobotoMono-Medium': require('./assets/fonts/RobotoMono-Medium.ttf'),
      'RobotoMono-Regular': require('./assets/fonts/RobotoMono-Regular.ttf'),
      'RobotoMono-Light': require('./assets/fonts/RobotoMono-Light.ttf'),
    });

    this.setState({ assetsLoaded: true });
  }

  render() {

    const { assetsLoaded } = this.state;

    if (assetsLoaded) {
      return (
        <AppContainer
          ref={ nav => {
            this.navigator = nav;
          } }
        />
      );
    }
    return (
      <View style={ styles.container }>
        <Image style={ styles.image } source={ require('./assets/logo.png') } />
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    resizeMode: 'contain',
    width: '50%'
  }
});

