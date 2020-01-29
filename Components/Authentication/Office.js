import React from 'react'
import { WebView } from 'react-native-webview'
import { storeToken, getToken } from './../helpers/api'

const handleWebViewNavigationStateChange = (newNavState, navigate) => {
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
    storeToken(json.token).then(() => {
      getToken().then(value => {
        if (value !== null) {
          navigate('CandidatesList')
        }
      })
    })
  }).catch(err => {
    console.log(err)
  })
}

const Office = props => {
  const { navigate } = props.navigation;

  return <WebView
    source={ { uri: 'https://testsamheroku.herokuapp.com/connect/azure' } }
    onNavigationStateChange={ newNavState => handleWebViewNavigationStateChange(newNavState, navigate) }
  />
}

export default Office