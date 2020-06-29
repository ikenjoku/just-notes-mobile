import React from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client'
import Screens from './screens'
import getEnvVars from '../config'
import * as SecureStore from 'expo-secure-store'
import { setContext } from 'apollo-link-context'

const { API_URI } = getEnvVars()

const uri = API_URI
const httpLink = createHttpLink({ uri })
const cache = new InMemoryCache()

const authLink = setContext(async (_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: (await SecureStore.getItemAsync('token')) || ''
    }
  }
})

const client = new ApolloClient({
  uri,
  cache,
  link: authLink.concat(httpLink)
})

export default function Main() {
  return (
    <ApolloProvider  client={client}>
      <Screens />
    </ApolloProvider>
  )
}
