import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { resultStyles } from './../styles/yellowStyles';

export default class YellowResult extends React.Component {
  render() {
    return (
      <View style={ resultStyles.container }>

        <Image style={ resultStyles.bulle4 } source={ { uri: 'https://zupimages.net/up/20/04/c9y5.png' } } />

        <Image style={ resultStyles.character } source={ { uri: 'https://www.zupimages.net/up/20/04/onsl.png' } } />

        <View style={ resultStyles.header }>
          <Text style={ resultStyles.firstText_contain }>MERCI</Text>
          <Text style={ resultStyles.firstText_contain }>À TOUS !</Text>
        </View>

        <View style={ resultStyles.header }>
          <Text style={ resultStyles.secondText_contain }>MERCI</Text>
          <Text style={ resultStyles.secondText_contain }>À TOUS !</Text>
        </View>

        <Image style={ resultStyles.bulle1 } source=
          { { uri: 'https://www.zupimages.net/up/20/04/cp58.png' } } />

        <Image style={ resultStyles.bulle2 } source=
          { { uri: 'https://zupimages.net/up/20/04/1ncq.png' } } />

        <Image style={ resultStyles.bulle3 } source=
          { { uri: 'https://zupimages.net/up/20/04/4rx5.png' } } />

        <View style={ resultStyles.btn }>
          <Text style={ resultStyles.btnText }>Retour</Text>
        </View>
      </View>
    );
  }
}