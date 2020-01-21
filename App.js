import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './Components/Authentication/Login';
import Register from './Components/Authentication/Register';
import CandidatesList from './Components/Votes/CandidatesList';

const MainNavigator = createStackNavigator({
  Login: { screen: Login },
  Register: { screen: Register },
  CandidatesList: { screen: CandidatesList}
}, {
  defaultNavigationOptions: {
    headerShown: false
  }
});
const App = createAppContainer(MainNavigator);
export default App;
