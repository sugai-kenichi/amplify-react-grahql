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
      image
      imagepath
      createdAt
      updatedAt
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
      image
      imagepath
      createdAt
      updatedAt
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
      image
      imagepath
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createTestTable = /* GraphQL */ `
  mutation CreateTestTable(
    $input: CreateTestTableInput!
    $condition: ModelTestTableConditionInput
  ) {
    createTestTable(input: $input, condition: $condition) {
      id
      firstName
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTestTable = /* GraphQL */ `
  mutation UpdateTestTable(
    $input: UpdateTestTableInput!
    $condition: ModelTestTableConditionInput
  ) {
    updateTestTable(input: $input, condition: $condition) {
      id
      firstName
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTestTable = /* GraphQL */ `
  mutation DeleteTestTable(
    $input: DeleteTestTableInput!
    $condition: ModelTestTableConditionInput
  ) {
    deleteTestTable(input: $input, condition: $condition) {
      id
      firstName
      createdAt
      updatedAt
      __typename
    }
  }
`;
