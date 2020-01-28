import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import { resultsStyles } from './../styles/comicStyles'

const createRows = (nRows, nSquares) => {
  let rows = []
  let i = 0

  while (i < nRows) {
    rows.push(<View key={ i } style={ resultsStyles.squareRow }>
      { createSquares(nSquares).map(e => e) }
    </View>)
    i++
  }

  return rows
}

const createSquares = n => {
  let squares = []
  let i = 0

  while (i < n) {
    squares.push(<Square key={ i } />)
    i++
  }

  return squares
}

const Square = props => <View
  style={ [resultsStyles.square, { backgroundColor: props.color }] }
/>

const ComicResults = () => {
  return <ScrollView>
    <View style={ resultsStyles.view }>
      <View style={ resultsStyles.head }>
        <Text style={ resultsStyles.headText }>Résultats</Text>
      </View>
      <View style={ resultsStyles.main }>
        { createRows(10, 7).map(e => e) }
      </View>
    </View>
  </ScrollView>
}

export default ComicResults