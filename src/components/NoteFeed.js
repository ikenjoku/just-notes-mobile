import React from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import Note from './Note'

const NoteFeed = (props) => {
  return (
    <View>
      <FlatList
        data={props.notes}
        keyExtractor={({ id }) => id.toString() }
        renderItem={({ item }) =>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Note', { id: item.id })}
        >
          <FeedView>
            <Note note={item} navigation={props.navigation} />
          </FeedView>
        </TouchableOpacity>}
        ItemSeparatorComponent={() => <Separator />}
      />
    </View>
  )
}

const Separator = styled.View`
  height: 1;
  width: 100%;
  background-color: #ced0ce
`
const FeedView = styled.View`
  height: 110;
  overflow: hidden;
  margin-bottom: 10px;
`

export default NoteFeed

