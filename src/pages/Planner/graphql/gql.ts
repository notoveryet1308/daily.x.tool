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
        name
        teamMember
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
        name
        teamMember
      }
      projectKey
    }
  }
`;

export const ADD_TEAM_MEMBER = gql`
  mutation addTeamMember($input: CreateTeamInput!) {
    addTeamMember(input: $input) {
      _id
      email
      name
      profession
      avatar
      teamMember
    }
  }
`;

export const GET_MY_TEAM_MEMBER_DETAIL = gql`
  query getMyTeamMemberDetail {
    getMyTeamMemberDetail {
      _id
      email
      name
      profession
      avatar
      teamMember
    }
  }
`;

export const GET_PROJECT_NAMES = gql`
  query GetAllProjectsName {
    getProjectNames
  }
`;

export const CREATE_TICKET = gql`
  mutation createTicket($input: CreateTicketInput!) {
    createTicket(input: $input) {
      id
      summary
      description
      projectId
      isDraft
      sprintDate
      issueType
      created
      updated
      priority
      ticketNumber
      status
      ticketKey
    }
  }
`;

export const GET_ALL_TICKETS = gql`
  query getAllTickets {
    getAllTickets {
      id
      summary
      description
      projectId
      isDraft
      issueType
      created
      updated
      priority
      ticketNumber
      status
      ticketKey
      assignee {
        _id
        name
        email
        avatar
      }

      reporter {
        _id
        name
        email
        avatar
      }
    }
  }
`;
