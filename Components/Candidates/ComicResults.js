import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { resultsStyles } from './../styles/comicStyles';
import { width } from './../styles/Styles';

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

const Percents = props => {
  return <View style={ [resultsStyles.percentsContainer, props.style] }>
    <View style={ [resultsStyles.progress, { width: `${props.percent}%` }] } />
    <Text style={ resultsStyles.candidateName }>{ props.name }</Text>
    <Text style={ resultsStyles.candidatePercent }>{ props.percent }%</Text>
  </View>
}

const ComicResults = () => {
  return <ScrollView>
    <View style={ resultsStyles.view }>
      <View style={ resultsStyles.head }>
        <Text style={ resultsStyles.headText }>Résultats</Text>
      </View>
      <View style={ resultsStyles.main }>
        { createRows(11, 7).map(e => e) }
        <View style={ resultsStyles.winnerContainer }>
          <Text style={ resultsStyles.winnerText }>Vainqueur</Text>
          <Text style={ resultsStyles.winnerText }>Maëliss Taraud</Text>
        </View>
        <Image style={ resultsStyles.palm } source={ require('./../../assets/Comic/palm.png') } />
        <View style={ resultsStyles.centerBlock }>
          <Image source={ require('./../../assets/Comic/crown.png') } />
          <Text style={ [resultsStyles.centerText, { fontSize: 29 }] }>Maire</Text>
          <Text style={ [resultsStyles.centerText, { fontSize: 32 }] }>2020</Text>
          <Image source={ require('./../../assets/Comic/arrow-down.png') } />
          <Percents style={ { width: width * 0.9 } } name={ "vainqueur maëliss taraud" } percent={ 60 } />
          <Image source={ require('./../../assets/Comic/arrow-down.png') } />
          <Image source={ require('./../../assets/Comic/arrow-down.png') } />
        </View>
      </View>
    </View>
    <View style={ resultsStyles.footer }>
      <Text style={ resultsStyles.footerTitle }>AUTRES CANDIDATS :</Text>
      <Percents name="arevichan" percent={ 20 } />
      <Percents name="guiral" percent={ 13 } />
    </View>
  </ScrollView>
}

export default ComicResults