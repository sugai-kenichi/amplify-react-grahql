/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($filter: ModelSubscriptionNoteFilterInput) {
    onCreateNote(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateInfomation = /* GraphQL */ `
  subscription OnCreateInfomation(
    $filter: ModelSubscriptionInfomationFilterInput
  ) {
    onCreateInfomation(filter: $filter) {
      id
      userId
      title
      detail
      filePaths
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateInfomation = /* GraphQL */ `
  subscription OnUpdateInfomation(
    $filter: ModelSubscriptionInfomationFilterInput
  ) {
    onUpdateInfomation(filter: $filter) {
      id
      userId
      title
      detail
      filePaths
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteInfomation = /* GraphQL */ `
  subscription OnDeleteInfomation(
    $filter: ModelSubscriptionInfomationFilterInput
  ) {
    onDeleteInfomation(filter: $filter) {
      id
      userId
      title
      detail
      filePaths
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
