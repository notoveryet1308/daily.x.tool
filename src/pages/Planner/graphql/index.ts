import { useMutation, useQuery } from "@apollo/client";

import { CREATE_PROJECT, GET_ALL_PROJECTS } from "./gql";
import { ProjectCreateInput } from "../type";

export const useCreateProject = () => {
  const [mutate, creationState] = useMutation(CREATE_PROJECT, {
    update(cache, { data: { createProject } }) {
      const existingNote = cache.readQuery({
        query: GET_ALL_PROJECTS,
      });
      cache.writeQuery({
        query: GET_ALL_PROJECTS,
        data: {
          getNote: [...existingNote?.getAllProjects, createProject],
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
