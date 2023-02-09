import { gql, useMutation } from "@apollo/client";
import { NoteDataType } from "../../Context/types";
import { GET_NOTE } from "../../pages/Notes/gql-query";

const CREATE_NOTE = gql`
  mutation CreateNote($input: CreateNoteInput!) {
    createNote(input: $input) {
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

export const useCreateNote = () => {
  const [mutateNote] = useMutation(CREATE_NOTE, {
    update(cache, { data: { createNote } }) {
      const existingNote = cache.readQuery({
        query: GET_NOTE,
      });
      cache.writeQuery({
        query: GET_NOTE,
        data: {
          getNote: [...existingNote?.getNote, createNote],
        },
      });
    },
  });

  const handleCreateNote = ({
    id,
    isPinned,
    description,
    title,
    tags,
    createdOn,
    updatedOn,
    hexCode,
  }: NoteDataType) => {
    mutateNote({
      variables: {
        input: {
          id,
          isPinned,
          description,
          title,
          tags,
          createdOn,
          updatedOn,
          hexCode,
        },
      },
      optimisticResponse: {
        __typename: "Mutation",
        createNote: {
          id,
          isPinned,
          description,
          title,
          tags,
          createdOn,
          updatedOn,
          hexCode,
          __typename: "Note",
        },
      },
    });
  };

  return { handleCreateNote };
};
