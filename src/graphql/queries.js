/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      description
      image
      imagepath
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        imagepath
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTestTable = /* GraphQL */ `
  query GetTestTable($id: ID!) {
    getTestTable(id: $id) {
      id
      firstName
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTestTables = /* GraphQL */ `
  query ListTestTables(
    $filter: ModelTestTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTestTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
