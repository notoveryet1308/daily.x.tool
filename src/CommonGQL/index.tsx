import { gql, useQuery } from "@apollo/client";

export const GET_CURRENT_USER = gql`
  query CurrentUser {
    getCurrentLoggedInUser {
      _id
      email
      password
      name
      profession
      avatar
      teamMember
    }
  }
`;

export const useGetLoggedUserDetail = () => {
  const loggedUserQuery = useQuery(GET_CURRENT_USER);
  return loggedUserQuery;
};
