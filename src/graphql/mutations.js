/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
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
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
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
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
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
export const createInfomation = /* GraphQL */ `
  mutation CreateInfomation(
    $input: CreateInfomationInput!
    $condition: ModelInfomationConditionInput
  ) {
    createInfomation(input: $input, condition: $condition) {
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
export const updateInfomation = /* GraphQL */ `
  mutation UpdateInfomation(
    $input: UpdateInfomationInput!
    $condition: ModelInfomationConditionInput
  ) {
    updateInfomation(input: $input, condition: $condition) {
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
export const deleteInfomation = /* GraphQL */ `
  mutation DeleteInfomation(
    $input: DeleteInfomationInput!
    $condition: ModelInfomationConditionInput
  ) {
    deleteInfomation(input: $input, condition: $condition) {
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
