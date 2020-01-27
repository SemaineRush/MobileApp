import React, { useEffect } from 'react'
import { WebView } from 'react-native-webview'
import { storeToken, getToken } from './../helpers/api'

const handleWebViewNavigationStateChange = newNavState => {
  const { url } = newNavState

  fetch(url, {
    method: 'get',
    dataType: 'json',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(response => {
    return response.json()
  }).then(json => {
    console.log(json.token)
    storeToken(json.token)
  }).catch(err => {
    console.log(err);
  })
}

const Office = props => {
  const { navigate } = props.navigation;

  useEffect(() => {
    getToken().then(value => {
      if (value !== null) {
        navigate('CandidatesList')
      }
    })
  })

  return <WebView
    source={ { uri: 'https://testsamheroku.herokuapp.com/connect/azure' } }
    onNavigationStateChange={ handleWebViewNavigationStateChange }
  />
}

export default Office