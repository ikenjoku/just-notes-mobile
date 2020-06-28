import React from 'react'
import { Text } from 'react-native'
import { useQuery } from '@apollo/client'
import { GET_NOTES } from '../gql/query'
import { NoteFeed, Loading } from '../components'

function Feeds(props) {
  const { loading, error, data } = useQuery(GET_NOTES)

  if (loading) return <Loading />
  if (error) return <Text>Error loading notes</Text>

  return <NoteFeed notes={data.notes} navigation={props.navigation} />
}

Feeds.navigationOptions = {
  title: 'Feeds'
}

export default Feeds