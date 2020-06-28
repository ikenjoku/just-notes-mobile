import React from 'react'
import { Text } from 'react-native'
import { useQuery } from '@apollo/client'
import { GET_NOTE } from '../gql/query'
import { Note, Loading } from '../components'

export default function NoteScreen({ navigation }) {
  const noteId = navigation.getParam('id')
  const { loading, error, data } = useQuery(GET_NOTE, { variables: { id: noteId } })

  if (loading) return <Loading />
  if (error) return <Text>Error loading note</Text>


  return <Note note={data.note} />
}
