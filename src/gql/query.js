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

export {
  GET_NOTE,
  GET_NOTES
}