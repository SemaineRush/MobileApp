import React from 'react';
import { StyleSheet, View, StatusBar, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './Components/Authentication/Login';
import Register from './Components/Authentication/Register';
import CandidatesList from './Components/Votes/CandidatesList';
import Vote from './Components/Votes/Vote';

const MainNavigator = createStackNavigator({
  Login: { screen: Login },
  Register: { screen: Register },
  CandidatesList: { screen: CandidatesList },
  Vote: { screen: Vote }
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
      'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf')
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
        <ActivityIndicator />
        <StatusBar barStyle="default" />
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

