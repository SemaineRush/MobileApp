import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { resultsStyles } from './../styles/yellowStyles';

export default class YellowResults extends React.Component {
  render() {
    return (
      <View style={ resultsStyles.container }>

        <Image style={ resultsStyles.bulle4 } source={ { uri: 'https://zupimages.net/up/20/04/c9y5.png' } } />

        <Image style={ resultsStyles.character } source={ { uri: 'https://www.zupimages.net/up/20/04/onsl.png' } } />

        <View style={ resultsStyles.header }>
          <Text style={ resultsStyles.firstText_contain }>MERCI</Text>
          <Text style={ resultsStyles.firstText_contain }>À TOUS !</Text>
        </View>

        <View style={ resultsStyles.header }>
          <Text style={ resultsStyles.secondText_contain }>MERCI</Text>
          <Text style={ resultsStyles.secondText_contain }>À TOUS !</Text>
        </View>

        <Image style={ resultsStyles.bulle1 } source=
          { { uri: 'https://www.zupimages.net/up/20/04/cp58.png' } } />

        <Image style={ resultsStyles.bulle2 } source=
          { { uri: 'https://zupimages.net/up/20/04/1ncq.png' } } />

        <Image style={ resultsStyles.bulle3 } source=
          { { uri: 'https://zupimages.net/up/20/04/4rx5.png' } } />

        <View style={ resultsStyles.btn }>
          <Text style={ resultsStyles.btnText }>Retour</Text>
        </View>
      </View>
    );
  }
}