import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import ComicResults from './../Candidates/ComicResults'
import YellowResults from './../Candidates/YellowResults'
import BlueResults from './../Candidates/BlueResults'

const Results = props => {
  const [winner, setWinner] = useState({})
  const [candidates, setCandidates] = useState({})
  const { getParam } = props.navigation

  useEffect(() => {
    setCandidates(getParam('election'));
    setWinner(getParam('winner'))
  }, [])

  return <View>
    { Object.values(candidates).map(candidate => {
      return candidate.idCandidate === winner
        ? candidate.info_candidate.component_win_mobile === "ComicWin"
          ? <ComicResults key={ candidate.idCandidate } />
          : candidate.info_candidate.component_win_mobile === "BlueWin"
            ? <BlueResults key={ candidate.idCandidate } />
            : candidate.info_candidate.component_win_mobile === "YellowWin"
              ? <YellowResults key={ candidate.idCandidate } />
              : null
        : null
    }) }
  </View>
}

export default Results