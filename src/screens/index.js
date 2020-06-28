import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import { MaterialCommunityIcons } from '@expo/vector-icons'
//screens
import Favorites from './favorites'
import MyNotes from './mynotes'
import Feeds from './feeds'
import Note from './note'
import AuthLoading from './authloading'
import Settings from './settings'
import SignIn from './signin'

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

const AuthStack = createStackNavigator({
  SignIn: SignIn
});

const SettingsStack = createStackNavigator({
  Settings: Settings
})

const TabNavigator = createBottomTabNavigator({
  FeedScreen: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='home' size={24} color={tintColor} />
    }
  },
  MyNoteScreen: {
    screen: MyNoteStack,
    navigationOptions: {
      tabBarLabel: 'My Notes',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='notebook' size={24} color={tintColor} />
    }
  },
  FavoriteScreen: {
    screen: FavStack,
    navigationOptions: {
      tabBarLabel: 'Favorites',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='star' size={24} color={tintColor} />
    }
  },
  SettingScreen: {
    screen: SettingsStack,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons name="settings" size={24} color={tintColor} />
      )
    }
  }
 })

const SwitchNavigator = createSwitchNavigator({
  AuthLoading: AuthLoading,
  Auth: AuthStack,
  App: TabNavigator,
}, {
  initialRouteName: 'AuthLoading'
})


export default createAppContainer(SwitchNavigator)