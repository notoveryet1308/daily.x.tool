import { gql, useQuery } from "@apollo/client";

export const GET_CURRENT_USER = gql`
  query CurrentUser {
    getCurrentLoggedInUser {
      _id
      name
      email
    }
  }
`;

export const useGetLoggedUserDetail = () => {
  const loggedUserQuer = useQuery(GET_CURRENT_USER);
  return loggedUserQuer;
};
