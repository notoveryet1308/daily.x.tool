import { gql, useMutation, useQuery } from "@apollo/client";
import { tagType } from "../Context/types";

import { isUserAuthenticated } from "../utils";

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

  const handleCreateTag = ({ id, label, value }: tagType) => {
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

  return { handleCreateTag, creationState };
};

export const useGetTags = () => {
  const tagQuery = useQuery(GET_TAG);
  return tagQuery;
};
