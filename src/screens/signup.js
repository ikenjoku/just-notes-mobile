import React, { Fragment } from 'react'
import { Text } from 'react-native'
import * as SecureStore from 'expo-secure-store'
import { useMutation } from '@apollo/client'
import { UserForm, Loading } from '../components'
import { SIGNUP_USER } from '../gql/mutation'


const SignUp = props => {
  const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
    onCompleted: data => {
      storeToken(data.signUp)
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
      { error && <Text>Sorry, there was an error registering you</Text> }
      <UserForm
        action={signUp}
        formType='signup'
        navigation={props.navigation}
      />
    </Fragment>
  )
}

SignUp.navigationOptions = {
  title: 'Register'
}

export default SignUp