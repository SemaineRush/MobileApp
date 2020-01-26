import React from 'react'
import { View, Text } from 'react-native'
import Comic from './Comic'
import BlueCandidate from './Blue'
import Yellow from './Yellow'

const Candidate = props => {
  const { navigate, goBack, getParam } = props.navigation

  return <View>
    { getParam('candidatePage') === 'Comic'
      ? <Comic navigate={ navigate } goBack={ goBack } />
      : getParam('candidatePage') === 'Blue'
        ? <BlueCandidate />
        : getParam('candidatePage') === 'Yellow'
          ? <Yellow navigate={ navigate } goBack={ goBack } />
          : <Text>No Page Found</Text> }
  </View>
}

export default Candidate