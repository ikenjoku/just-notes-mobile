import React from 'react'
import { View, Text } from 'react-native'

function MyNotes() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems:'center' }}>
      <Text>My Notes</Text>
    </View>
  )
}

MyNotes.navigationOptions = {
  title: 'My Notes'
}

export default MyNotes