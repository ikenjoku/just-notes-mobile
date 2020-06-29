import React from 'react'
import { View, Text } from 'react-native'
import { useQuery } from '@apollo/client'
import { GET_MY_NOTES } from '../gql/query'
import { NoteFeed, Loading } from '../components'

function MyNotes(props) {
  const { loading, error, data } = useQuery(GET_MY_NOTES)

  if (loading) return <Loading />
  if (error) return <Text>Error loading your notes</Text>

  if (data.me.notes.length !== 0) {
    return <NoteFeed notes={data.me.notes} navigation={props.navigation} />
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems:'center' }}>
        <Text>You do not have any notes yet</Text>
      </View>
    )
  }
}

MyNotes.navigationOptions = {
  title: 'My Notes'
}

export default MyNotes