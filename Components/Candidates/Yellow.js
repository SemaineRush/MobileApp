// TO DO: ajouter l'image des bulles, prendre en meilleur qualité la photo de Arevichan, et ajouter les photos des réseaux sociaux.
import * as React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './../styles/yellowStyles';

const content = [
  {
    img: require('./../../assets/Yellow/team.jpg'),
    text: 'A l’aise avec les personnes qui m’entourent je sais prêter une oreille attentive aux habitants qui en ont besoin. Avec moi vous vous sentez écouté.'
  },
  {
    img: require('./../../assets/Yellow/work.jpg'),
    text: 'Je suis une personne joyeuse dont la bonne humeur est intarissable. Energique et enthousiaste je saurais rythmer la ville de Sup à travers divers évènements et animations.'
  },
  {
    img: require('./../../assets/Yellow/arevichan.jpg'),
    text: 'Né de parents Sri Lankais, je possède une double culture qui me permet de porter une vision élargie de l’environnement qui l’entoure. J’ai donc grandi dans la tolérance et le respect de chacun et ce sont ces valeurs que je compte transmettre à la ville de Sup.'
  }
]

const Container = props => {
  return <View style={ styles.center_allMenu }>
    <View style={ styles.rectangle }>
      <Image style={ styles.rectangleImage } source={ props.image } />
    </View>
    <Text style={ styles.afterRectangle }>{ props.text }</Text>
  </View>
}

export default class Yellow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={ styles.container }>
        <ScrollView>
          <View style={ styles.AllLeft }>
            <Image style={ styles.character } source={ require('./../../assets/Yellow/portrait.png') } />
            <Image style={ styles.bubbles } source={ require('./../../assets/Yellow/bubbles.png') } />
            <TouchableOpacity onPress={ () => this.props.goBack() }>
              <Text style={ styles.chevron }>{ "<" }</Text>
            </TouchableOpacity>
            <View style={ styles.header_text }>
              <Text style={ [styles.colorWhite, styles.header_textFirst] }>
                Arevichan ARUDCHELVAN
              </Text>
              <Text style={ [styles.colorWhite, styles.header_textSecond] }>
                Le monde est à nous !
              </Text>
            </View>
            <View style={ styles.allSocial_network }>
              <TouchableOpacity style={ styles.social_network }>
                <Image style={ styles.socialNetworkImage } source={ require('./../../assets/Yellow/facebook.png') } />
              </TouchableOpacity>
              <TouchableOpacity style={ [styles.social_network, styles.leftNetwork] }>
                <Image style={ styles.socialNetworkImage } source={ require('./../../assets/Yellow/twitter.png') } />
              </TouchableOpacity>
              <TouchableOpacity style={ [styles.social_network, styles.leftNetwork] }>
                <Image style={ styles.socialNetworkImage } source={ require('./../../assets/Yellow/instagram.png') } />
              </TouchableOpacity>
            </View>
          </View>
          <View style={ styles.section }>
            <Text style={ [styles.character_resum] }>"Je veux faire de Sup une famille où bonne entente et respect règnent en maître."</Text>
            <Text style={ [styles.h4, styles.AllLeft] }>JE SUIS LE MAIRE QU'IL VOUS FAUT!</Text>
            <Text style={ [styles.AllLeft, styles.explain, styles.colorGrey, styles.bold] }>
              Laissez moi vous expliquer pourquoi
            </Text>

            { content.map((e, i) => <Container key={ i } image={ e.img } text={ e.text } />) }

            <View>
              <View style={ styles.AllLeft }>
                <TouchableOpacity onPress={ () => this.props.navigate('Vote') } style={ styles.btn }>
                  <Text style={ styles.btnText }>Voter</Text>
                </TouchableOpacity>
                <View style={ styles.shadowStyle }></View>
              </View>
            </View>
            <View style={ { height: 100 } } />
          </View>
        </ScrollView>
      </View>
    );
  }
}