import { gql, useMutation, useQuery } from "@apollo/client";
import { NoteDataType, tagType } from "../../Context/types";
import { GET_NOTE } from "../../pages/Notes/gql-query";
import { isUserAuthenticated } from "../../utils";

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

export const GET_TAG = gql`
  query GetTag {
    getTag {
      id
      label
      value
    }
  }
`;

export const CREATE_TAG = gql`
  mutation CreateTag($input: CreateTagInput!) {
    createTag(input: $input) {
      id
      label
      value
    }
  }
`;

export const useCreateTag = () => {
  const [mutate, creationState] = useMutation(CREATE_TAG, {
    update(cache, { data: { createTag } }) {
      const existingNote = cache.readQuery({
        query: GET_TAG,
      });
      cache.writeQuery({
        query: GET_TAG,
        data: {
          getTag: [...existingNote?.getTag, createTag],
        },
      });
    },
  });

  const handleCreatetag = ({ id, label, value }: tagType) => {
    console.log({ id, label, value });
    const logged = isUserAuthenticated();
    logged &&
      mutate({
        variables: {
          input: {
            id,
            label,
            value,
          },
        },
        optimisticResponse: {
          __typename: "Mutation",
          createTag: {
            id,
            label,
            value,
            __typename: "Tag",
          },
        },
      });
  };

  return { handleCreatetag, creationState };
};

export const useGetTags = () => {
  const tagQuery = useQuery(GET_TAG);
  return tagQuery;
};

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
