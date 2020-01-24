import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { BackgroundColors } from '../styles/Styles';
import { styles } from '../styles/comicStyles';
import { Linking } from 'expo';

const squares = {
  rowWhite: ['white', 'white', 'white', 'white', 'white', 'white', 'white'],
  rowBottom: ['white', 'white', 'white', 'white', 'white', 'white', '#FFC500'],
  rowFooter: ['#FFC500', 'white', 'white', 'white', 'white', 'white', 'white'],
  columnLeft: ['white', 'red', '#FF5000', '#FFC500', 'white', 'red', '#FF5000', '#FFC500', 'white', 'red', '#FF5000', '#FFC500', 'white'],
  columnRight: ['red', '#FF5000', '#FFC500', 'white', 'white', 'red', '#FF5000', '#FFC500', 'white', 'white', 'white', 'red', '#FF5000'],
}

const program = [
  "Égalité culturelle, accessibilité tarifaire, ouvert au public, cela permet d'améliorer l'éducation et le savoir à long terme des jeunes.",
  "Promouvoir des lieux publics pour que chacun puisse profiter de la ville à sa manière (espace pour le sport, espace détente, lieux en pleine nature).",
  "Organiser différents évènements culturels, sportifs, humanitaires.",
  "Valoriser l'échange entre voisins pour apprendre à connaître davantage chaque personne.",
  "Apporter un accompagnement à chacun en fonction de son besoin.",
  "Sensibiliser à l'environnement par des gestes du quotidien.",
  "Panneaux solaires locaux permettant d'avoir une consommation plus écologiques et de réduire à terme les coûts des habitants."
]

const socialMedia = [
  { icon: require('./../../assets/Comic/icon-insta.png'), link: '' },
  { icon: require('./../../assets/Comic/icon-snap.png'), link: '' },
  { icon: require('./../../assets/Comic/icon-twitter.png'), link: '' },
  { icon: require('./../../assets/Comic/icon-yt.png'), link: '' },
]

const Square = props => <View
  style={ [styles.square, { backgroundColor: props.color }] }
/>

const Program = props => <View style={ styles.programPart }>
  <View style={ styles.programStep }>
    <Text style={ styles.programIndex }>{ props.index + 1 }</Text>
    <Text style={ styles.programTotal }>sur</Text>
    <Text style={ styles.programTotal }>{ program.length }</Text>
  </View>
  <View style={ { flex: 3 } }>
    <View style={ styles.programShadow } />
    <View style={ styles.programInfo }>
      <Text style={ styles.programText }>{ props.text }</Text>
    </View>
  </View>
</View>

const Comic = () => {
  return <View style={ styles.view }>
    <Image style={ styles.pola } source={ require('./../../assets/Comic/pola-ombre.png') } />
    <Text style={ styles.polaText }>Ensemble vers l’avenir</Text>
    <View style={ [styles.headerContainer, { marginTop: -70 }] }>
      <Image style={ styles.headerImage } source={ require('./../../assets/Comic/header.png') } />
    </View>

    <View style={ [BackgroundColors.white, styles.container] }>
      <View style={ styles.squareRow }>
        { squares.rowWhite.map((e, i) => <Square key={ i } color={ e } />) }
      </View>
      <View style={ [styles.squareRow, { flex: 13 }] }>
        <View style={ styles.squareColumn }>
          { squares.columnLeft.map((e, i) => <Square key={ i } color={ e } />) }
        </View>
        <View style={ [styles.squareColumn, { flex: 5 }] }>
          <View style={ [styles.resumeContainer, { flex: 10 }] }>
            <Text style={ styles.resumeText }>
              Maêliss, c’est la joie de vivre alliée à l’audace; du sérieux couplé à des rires (beaucoup de rires); un esprit de leader qui n’abandonnera personne en cours de route.
            </Text>
            <Text style={ [styles.resumeText, { marginVertical: 60 }] }>
              Maëliss commença avec une formation de pompière volontaire; elle est aujourd’hui cheffe scout; pourquoi pas maire de notre ville demain ?
            </Text>
            <Text style={ styles.resumeText }>
              Altruiste, dynamique, drôle… Tant d’adjectifs pourraient servir sa cause.
            </Text>
          </View>
          <View style={ [styles.resumeContainer, { flex: 3 }] }>
            <Text style={ styles.resumeText }>
              Ne réfléchissez plus
            </Text>
            <Text style={ [styles.resumeText, styles.resumeTextEmphasis] }>
              Votez maëliss pour que sup’ s’agrandisse
            </Text>
          </View>
        </View>
        <View style={ styles.squareColumn }>
          { squares.columnRight.map((e, i) => <Square key={ i } color={ e } />) }
        </View>
      </View>
      <View style={ styles.squareRow }>
        { squares.rowBottom.map((e, i) => <Square key={ i } color={ e } />) }
      </View>
    </View>
    <View style={ styles.videoContainer }>
      <TouchableOpacity onPress={ () => Linking.openURL('https://www.youtube.com/watch?v=W2G9eqCNG8Y') }>
        <Image style={ styles.videoLink } source={ require('./../../assets/Comic/fastAndCurious.png') } />
      </TouchableOpacity>
    </View>
    <View style={ styles.programContainer }>
      <Text style={ styles.programH1 }>Son programme</Text>
      <Text style={ styles.programH2 }>Sa vocation</Text>
      { program.map((e, i) => <Program key={ i } index={ i } text={ e } />) }
      <Image style={ styles.arrow } source={ require('./../../assets/Comic/fleche-gauche.png') } />
      <Text style={ styles.chooseText }>Faites le choix</Text>
      <Text style={ styles.chooseName }>maËliss</Text>
      <Image style={ styles.arrow } source={ require('./../../assets/Comic/fleche-droite.png') } />
    </View>
    <View style={ styles.footer }>
      <Image style={ styles.mediaBubble } source={ require('./../../assets/Comic/bulle-bas.png') } />
      <View style={ styles.mediaBubbleContainer }>
        <Text style={ styles.mediaBubbleText }>Retrouvez Maëliss</Text>
        <Text style={ [styles.mediaBubbleText, styles.mediaBubbleTextEmphasis] }>SUR LES RÉSEAUX</Text>
      </View>
      <View style={ styles.squareRow }>
        { squares.rowWhite.map((e, i) => <Square key={ i } color={ e } />) }
      </View>
      <View style={ styles.socialMediaContainer }>
        { socialMedia.map((e, i) => <TouchableOpacity key={ i } onPress={ () => Linking.openURL(e.link) }>
          <Image style={ i === 3 ? [styles.socialMediaIcon, styles.yt] : styles.socialMediaIcon } source={ e.icon } />
        </TouchableOpacity>) }
      </View>
      <View style={ styles.squareRow }>
        { squares.rowFooter.map((e, i) => <Square key={ i } color={ e } />) }
      </View>
    </View>
  </View>
}

export default Comic