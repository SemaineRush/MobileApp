import React, { useState, useRef } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { PrimaryButton, LinkButton } from '../Common/Button';
import { Email } from '../Common/Input';
import { Texts, Colors, BackgroundColors, height, width } from '../Styles/Styles';
import { AuthHeader } from '../Common/Headers';
import { Footer } from '../Common/Footer';
import examples from './../Utils/examples';

const placeholder = examples[Math.floor(Math.random() * examples.length)]

const styles = StyleSheet.create({
  view: {
    flex: 1,
    width: width,
    minHeight: height,
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 45
  },
  info: {
    paddingHorizontal: 30,
    paddingVertical: 5
  }
});

const Recover = props => {
  const emailRef = useRef();
  const [email, setEmail] = useState('')
  const { navigate } = props.navigation

  return <ScrollView>
    <View style={ [BackgroundColors.white, styles.view] }>
      <AuthHeader h1='Un oubli ?' h2='Réinitialisez votre mot de passe' />
      <View style={ styles.container }>
        <Text style={ [Texts.h4, styles.info] }>
          Un nouveau mot de passe vous sera envoyé sur votre adresse mail.
        </Text>
        <Text style={ [Texts.h4, styles.info] }>
          Vous pourrez le modifier dans votre espace personnel.
        </Text>
      </View>
      <View style={ [styles.container, { paddingTop: 0 }] }>
        <Email
          placeholder={ placeholder.email }
          reference={ emailRef }
          email={ email }
          setEmail={ setEmail }
        />
        <PrimaryButton
          onPress={ () => null }
          title={ 'Valider' }
        />
      </View>
      <View style={ [styles.container, { marginBottom: 45 }] }>
        <Text style={ Colors.grey }>
          Vous avez déjà de compte ?
        </Text>
        <LinkButton
          onPress={ () => navigate('Login') }
          title={ 'Connectez-vous.' }
        />
      </View>
      <Footer />
    </View>
  </ScrollView>
};

export default Recover;