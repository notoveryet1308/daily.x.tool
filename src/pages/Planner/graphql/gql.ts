import { gql } from "@apollo/client";

export const CREATE_PROJECT = gql`
  mutation CreateProject($input: CreateProjectInput!) {
    createProject(input: $input) {
      id
      name
      description
      owner {
        _id
        email
      }
      projectKey
    }
  }
`;

export const GET_ALL_PROJECTS = gql`
  query getAllProjects {
    getAllProjects {
      id
      name
      description
      owner {
        _id
        email
      }
      projectKey
    }
  }
`;
