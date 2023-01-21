import { gql, useQuery } from '@apollo/client';

export const GET_NOTE = gql`
  query GetNote {
    getNote {
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
export const useGetNotes = () => {
  const getNoteQuery = useQuery(GET_NOTE);
  return getNoteQuery;
};
