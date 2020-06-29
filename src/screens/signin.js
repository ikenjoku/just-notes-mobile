import React, { Fragment } from 'react'
import { Text } from 'react-native'
import * as SecureStore from 'expo-secure-store'
import { useMutation } from '@apollo/client'
import { UserForm, Loading } from '../components'
import { SIGNIN_USER } from '../gql/mutation'


const SignIn = props => {
  const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
    onCompleted: data => {
      storeToken(data.signIn)
    }
  })

  const storeToken = (token) => {
    SecureStore.setItemAsync('token', token).then(
      props.navigation.navigate('App')
    )
  }

  if (loading) return <Loading />
  return (
    <Fragment>
      { error && <Text>Error signing in</Text> }
      <UserForm
        action={signIn}
        formType='signin'
        navigation={props.navigation}
      />
    </Fragment>
  )
}

SignIn.navigationOptions = {
  title: 'Sign In'
}

export default SignIn