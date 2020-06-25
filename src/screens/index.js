import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
//screens
import Favorites from './favorites'
import MyNotes from './mynotes'
import Feeds from './feeds'
import Note from './note'

const FeedStack = createStackNavigator({
  Feed: Feeds,
  Note: Note
})

const FavStack = createStackNavigator({
  Favorites: Favorites,
  Note: Note
})

const MyNoteStack = createStackNavigator({
  MyNotes: MyNotes,
  Note: Note
})

const TabNavigator = createBottomTabNavigator({
  FeedScreen: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Feed'
    }
  },
  MyNoteScreen: {
    screen: MyNoteStack,
    navigationOptions: {
      tabBarLabel: 'My Notes'
    }
  },
  FavoriteScreen: {
    screen: FavStack,
    navigationOptions: {
      tabBarLabel: 'Favorites'
    }
  }
})

export default createAppContainer(TabNavigator)