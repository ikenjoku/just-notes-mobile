import React from 'react'
import { View, Text } from 'react-native'

function Favorites() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems:'center' }}>
      <Text>Favorites</Text>
    </View>
  )
}

Favorites.navigationOptions = {
  title: 'Favorites'
}

export default  Favorites