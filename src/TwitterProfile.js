import React, { Component } from 'react'
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native'

class TwitterProfile extends Component {

  constructor(props) {
    super(props)
  }

  render () {
    let user = this.props.user

    return (
      <View style={styles.content}>
        <Image style={styles.pic} source={{uri: user.profile_image_url_https }} />
        <Text style={styles.header}>{user.name}</Text>
        <View style={styles.scroll}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.mono}>{JSON.stringify(user, null, 4)}</Text>
          </ScrollView>
        </View>
     </View>
    )
  }
}

const styles = StyleSheet.create({
  pic: {
    width: 100,
    height: 100
  },
  header: {
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
    fontSize: 16
  },
  mono: {
    fontFamily: 'Menlo',
    paddingTop: 10
  },
  scroll: {
    marginTop: 0,
    paddingTop: 0,
    backgroundColor: '#f2f2f2',
    borderColor: '#888',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row'
  },
  scrollView: {
    flex: 1
  }
})

export default TwitterProfile
