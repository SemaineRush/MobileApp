import React from 'react'
import { ScrollView } from 'react-native'
import Comic from './Comic'

const Candidate = props => {
  const { getParams } = props.navigation

  return <ScrollView>
    <Comic />
  </ScrollView>
}

export default Candidate