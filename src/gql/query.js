import { gql } from '@apollo/client'

const GET_NOTES = gql`
  query notes {
    notes {
      id
      createdAt
      content
      favoriteCount
      author {
        id
        username
        avatar
        }
      }
    }
`

const GET_NOTE = gql`
  query note($id: ID!) {
    note(id:$id) {
      id
      content
      createdAt
      favoriteCount
      favoritedBy {
        id
        username
      }
      author {
        id
        avatar
        username
      }
    }
  }
`

const GET_MY_NOTES = gql`
  query me {
    me {
      id
      username
      notes {
        id
        createdAt
        content
        favoriteCount
        author {
          username
          id
          avatar
        }
      }
    }
  }
`

const GET_MY_FAVORITES = gql`
  query me {
    me {
      id
      username
      favorites {
        id
        createdAt
        content
        favoriteCount
        author {
          username
          id
          avatar
        }
      }
    }
  }
`

const GET_ME = gql`
  query me {
    me {
      id
      favorites {
        id
      }
    }
  }
`

const IS_LOGGED_IN = gql`
{
  isLoggedIn @client
}
`

export {
  GET_ME,
  GET_NOTE,
  GET_NOTES,
  IS_LOGGED_IN,
  GET_MY_NOTES,
  GET_MY_FAVORITES
}