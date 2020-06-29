import React from 'react'
import { View, Text } from 'react-native'
import { useQuery } from '@apollo/client'
import { GET_MY_FAVORITES } from '../gql/query'
import { NoteFeed, Loading } from '../components'

function Favorites(props) {
  const { loading, error, data } = useQuery(GET_MY_FAVORITES)

  if (loading) return <Loading />
  if (error) return <Text>Error loading your favorites</Text>

  if (data.me.favorites.length !== 0) {
    return <NoteFeed notes={data.me.favorites} navigation={props.navigation} />
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems:'center' }}>
        <Text>You do not have any favorites yet</Text>
      </View>
    )
  }
}

Favorites.navigationOptions = {
  title: 'Favorites'
}

export default  Favorites