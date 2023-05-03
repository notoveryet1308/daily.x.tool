import { useMutation, useQuery } from "@apollo/client";

import {
  ADD_TEAM_MEMBER,
  CREATE_PROJECT,
  CREATE_TICKET,
  GET_ALL_PROJECTS,
  GET_MY_TEAM_MEMBER_DETAIL,
  GET_PROJECT_NAMES,
  GET_ALL_TICKETS,
  GET_TICKET_BY_ID,
} from "./gql";
import { CreateTicketInputType, ProjectCreateInput } from "../type";

export const useCreateProject = () => {
  const [mutate, creationState] = useMutation(CREATE_PROJECT, {
    update(cache, { data: { createProject } }) {
      const existingNote = cache.readQuery({
        query: GET_ALL_PROJECTS,
      });
      cache.writeQuery({
        query: GET_ALL_PROJECTS,
        data: {
          getAllProjects: [...existingNote?.getAllProjects, createProject],
        },
      });
    },
  });

  const handleCreateProject = (createData: ProjectCreateInput) => {
    mutate({
      variables: {
        input: {
          ...createData,
        },
      },
      optimisticResponse: {
        __typename: "Mutation",
        createProject: {
          ...createData,
          __typename: "Project",
        },
      },
    });
  };

  return { handleCreateProject, creationState };
};

export const useGetAllProjects = () => {
  const getProjectFetchState = useQuery(GET_ALL_PROJECTS);
  return getProjectFetchState;
};

export const useGetMyTeamMemberDetail = () => {
  const getAllTeamMemberState = useQuery(GET_MY_TEAM_MEMBER_DETAIL);
  return getAllTeamMemberState;
};

export const useAddTeamMember = () => {
  const [mutate, addMemberState] = useMutation(ADD_TEAM_MEMBER, {
    refetchQueries: [GET_MY_TEAM_MEMBER_DETAIL],
  });

  const handleAddTeamMember = (email: string) => {
    mutate({
      variables: {
        input: {
          email,
        },
      },
    });
  };

  return { handleAddTeamMember, addMemberState };
};

export const useGetProjectNames = () => {
  const getProjectNames = useQuery(GET_PROJECT_NAMES);
  return getProjectNames;
};

export const useCreateTicket = () => {
  const [mutate, createTicketState] = useMutation(CREATE_TICKET);

  const handleCreateTicket = (data: CreateTicketInputType) => {
    mutate({
      variables: {
        input: {
          ...data,
        },
      },
    });
  };

  return { handleCreateTicket, createTicketState };
};

export const useGetAllTickets = () => {
  const getAllTickets = useQuery(GET_ALL_TICKETS);
  return getAllTickets;
};

export const useGetTicketById = ({
  ticketId,
  projectId,
}: {
  ticketId: string;
  projectId: string;
}) => {
  const getTicketById = useQuery(GET_TICKET_BY_ID, {
    variables: {
      input: {
        id: ticketId,
        projectId,
      },
    },
  });

  return getTicketById;
};
