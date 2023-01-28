import { gql, useMutation } from '@apollo/client';

export const UPDATE_NOTE = gql`
  mutation UpdateNote($input: CreateNoteInput!) {
    updateNote(input: $input) {
      id
      title
      description
      updatedOn
      createdOn
      isPinned
      hexCode
      tags {
        id
        label
        value
      }
    }
  }
`;

export const DELETE_NOTE = gql`
  mutation DeleteNote($input: DeleteNoteInput!) {
    deleteNote(input: $input)
  }
`;
