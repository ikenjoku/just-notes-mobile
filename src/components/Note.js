import React from 'react'
import { ScrollView, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import Markdown from 'react-native-markdown-renderer'
import { format } from 'date-fns'

function Note ({ note }) {

  return (
    <NoteView>
      <Text>
        Note by {note.author.username} / Published{' '}
        { format(new Date(note.createdAt), 'MMM do yyyy') }
      </Text>
      <Markdown>{note.content}</Markdown>
    </NoteView>
  )
}

const NoteView = styled.ScrollView`
  padding: 10px;
`

export default Note
