import React from 'react'
import { View, Text, Button } from 'react-native'

function Feeds(props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems:'center' }}>
      <Text>Feeds</Text>
      <Button
        title='See More'
        onPress={() => props.navigation.navigate('Note', { title: 'I got here' })}
      ></Button>
    </View>
  )
}

Feeds.navigationOptions = {
  title: 'Feeds'
}

export default Feeds