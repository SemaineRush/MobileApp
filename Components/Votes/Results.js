import React, { useState, useEffect } from 'react'
import { StyleSheet, ActivityIndicator, View, Text } from 'react-native'
import ComicResults from './../Candidates/ComicResults'
import YellowResults from './../Candidates/YellowResults'
import BlueResults from './../Candidates/BlueResults'
import { height, width } from './../styles/Styles'

const style = StyleSheet.create({
  view: {
    flex: 1,
    height: height,
    width: width,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const Results = props => {
  const [winner, setWinner] = useState({})
  const [candidates, setCandidates] = useState([])
  const { getParam } = props.navigation
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const others = []
    const election = getParam('election')
    const id = getParam('winner')

    Object.values(election).map(candidate => {
      if (candidate.idCandidate === id) {
        setWinner(candidate)
      } else {
        others.push(candidate)
      }
    })

    setCandidates(others)
    setLoading(false)
  }, [])

  return !loading
    ? winner.info_candidate.component_win_mobile === "ComicWin"
      ? <ComicResults candidates={ candidates } winner={ winner } />
      : winner.info_candidate.component_win_mobile === "BlueWin"
        ? <BlueResults />
        : winner.info_candidate.component_win_mobile === "YellowWin"
          ? <YellowResults />
          : <Text>No Results Found</Text>
    : <View style={ style.view }>
      <ActivityIndicator />
    </View>
}

export default Results