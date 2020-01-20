import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './Components/Authentication/Login';
import Register from './Components/Authentication/Register';

const MainNavigator = createStackNavigator({
  Login: {screen: Login},
  Register: {screen: Register},
});
const App = createAppContainer(MainNavigator);
export default App;
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }
