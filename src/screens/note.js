import React from 'react'
import { View, Text } from 'react-native'

export default function Note(props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems:'center' }}>
      <Text>Note Details</Text>
      {
        props.navigation.state.params.title &&
        <Text>{props.navigation.state.params.title}</Text>
      }
    </View>
  )
}
