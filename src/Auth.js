import config from './Config'
import OAuthManager from 'react-native-oauth'

const manager = new OAuthManager('ReactNativeOAuth')

manager.configure(config)

const twitterUrl = 'https://api.twitter.com/1.1/account/settings.json'
const facebookUrl = 'https://graph.facebook.com/v2.8/me?fields=id,email'
const googleUrl = 'https://www.googleapis.com/plus/v1/people/me'


/*
export const facebookLogin = () => {
	  manager.authorize('facebook')
  .then(resp =>
    manager.makeRequest('facebook', facebookUrl).then(resp => {
      console.log('Facebook -> ', resp.data)
    }))
  .catch(err => console.log(err))
}

export const googleLogin = () => {
  manager.authorize('google', {scopes: 'email'})
  .then(resp =>
    manager.makeRequest('google', googleUrl).then(resp => {
      console.log('Google -> ', resp.data)
    }))
  .catch(err => console.log('There was an error'))
}
*/

/*
export const twitterLogin = (state) => {
  manager.authorize('twitter', {scopes: 'email'})
          .then(resp => {
            console.log('OAuth ->', resp)

            if (resp.authorized) {
              state.auth = resp
            }

            return manager.makeRequest('twitter', twitterUser + state.auth.response.uuid)
              .then(resp => {
                console.log('Twitter ->', resp.data)
                state.user = resp.data
              })
            }
          )
          .catch(err => console.log(err))
}
*/
export const twitterUser = 'https://api.twitter.com/1.1/users/show.json?user_id='

export default manager
