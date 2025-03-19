/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($filter: ModelSubscriptionNoteFilterInput) {
    onCreateNote(filter: $filter) {
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
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($filter: ModelSubscriptionNoteFilterInput) {
    onUpdateNote(filter: $filter) {
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
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($filter: ModelSubscriptionNoteFilterInput) {
    onDeleteNote(filter: $filter) {
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
export const onCreateTestTable = /* GraphQL */ `
  subscription OnCreateTestTable(
    $filter: ModelSubscriptionTestTableFilterInput
  ) {
    onCreateTestTable(filter: $filter) {
      id
      firstName
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTestTable = /* GraphQL */ `
  subscription OnUpdateTestTable(
    $filter: ModelSubscriptionTestTableFilterInput
  ) {
    onUpdateTestTable(filter: $filter) {
      id
      firstName
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTestTable = /* GraphQL */ `
  subscription OnDeleteTestTable(
    $filter: ModelSubscriptionTestTableFilterInput
  ) {
    onDeleteTestTable(filter: $filter) {
      id
      firstName
      createdAt
      updatedAt
      __typename
    }
  }
`;
