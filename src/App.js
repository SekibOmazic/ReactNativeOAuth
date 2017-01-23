import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'

import Login from './Login'
import TwitterProfile from './TwitterProfile'
import manager, { twitterUser } from './Auth'

export default class ReactNativeOAuth extends Component {

  constructor() {
    super()

    this.state = {
      auth: null,
      user: null
    }

    this.signInWithTwitter = this.signInWithTwitter.bind(this)
  }

  signInWithTwitter() {
    let _this = this

    manager.authorize('twitter', {scopes: 'email'})
            .then(resp => {
              console.log('OAuth ->', resp)

              if (resp.authorized) {
                _this.setState({auth: resp})
              }

              return manager.makeRequest('twitter', twitterUser + resp.response.uuid)
                .then(resp => {
                  console.log('Twitter ->', resp.data)
                  _this.setState({user: resp.data})
                })
              }
            )
            .catch(err => console.log(err))
  }

  render() {
    console.log('App render ->', this.state)

    return (
      this.state.user ?
        <TwitterProfile user={this.state.user} />
        :
        <Login twitterLogin={this.signInWithTwitter} />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
