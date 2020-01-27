import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Splash from './Components/Common/Splash';
import Login from './Components/Authentication/Login';
import Register from './Components/Authentication/Register';
import Recover from './Components/Authentication/Recover';
import CandidatesList from './Components/Votes/CandidatesList';
import Vote from './Components/Votes/Vote';
import BlueCandidate from './Components/Candidates/Blue';
import BlueResults from './Components/Candidates/BlueResults';

const MainNavigator = createStackNavigator({
  Login: { screen: Login },
  Register: { screen: Register },
  Recover: { screen: Recover },
  CandidatesList: { screen: CandidatesList },
  Vote: { screen: Vote },
  Blue: { screen: BlueCandidate},
  BlueResults: {screen: BlueResults},
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
    await Font.loadAsync({
      'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
      'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
      'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
      'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
      'Montserrat-SemiBoldItalic': require('./assets/fonts/Montserrat-SemiBoldItalic.ttf'),
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
        <Splash />
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
});

