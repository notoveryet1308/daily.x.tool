import { useMutation, useQuery } from "@apollo/client";

import { CREATE_PROJECT, GET_ALL_PROJECTS } from "./gql";
import { ProjectCreateInput } from "../type";

export const useCreateProject = () => {
  const [mutate, creationState] = useMutation(CREATE_PROJECT);

  const handleCreateProject = (createData: ProjectCreateInput) => {
    mutate({
      variables: {
        input: {
          ...createData,
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
