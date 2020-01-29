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
    let others = []
    let election = getParam('election')
    let id = getParam('winner')

    Object.keys(election).map(e => {
      if (e == id) {
        Object.values(election).map(i => {
          if (election[e].idCandidate === i.idCandidate) {
            setWinner(i)
          } else {
            others.push(i)
          }
        })
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