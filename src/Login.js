import React, { Component } from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native'

class Login extends Component {

  render () {

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('./images/Oauth_logo.png')} />

          <Text style={styles.title}>OAuth login with React Native</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.twitterButton} onPress={this.props.twitterLogin}>
            <Image
              style={styles.twitterButton}
              source={require('./images/sign-in-with-twitter.png')} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#3498db'
    backgroundColor: '#2980b9'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100
  },
  title: {
    color: '#FFF',
    marginTop: 10,
    width: 160,
    textAlign: 'center',
    opacity: 0.8
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  twitterButton: {
    height: 50,
    width: 260
  }
})

export default Login
