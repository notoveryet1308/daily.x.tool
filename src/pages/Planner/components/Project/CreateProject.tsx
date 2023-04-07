import { useState, useEffect } from "react";
import { useImmer } from "use-immer";

import { Input, TextArea } from "../../../../component/UI/Input";
import { PrimaryButton, TertiaryButton } from "../../../../component/UI/Button";

import { StyledCreateProjectFiled, StyledCreateProjectFooter } from "./style";
import { useCheckRequiredValue } from "../../../../hooks";
import { useCreateProject } from "../../graphql";
import { nanoid } from "nanoid";
import { SuccessToast } from "../../../../component/Toast";

type projectDataFields = "projectName" | "projectKey" | "projectDescription";

const CreateProject = ({ onCancel }: { onCancel: Function }) => {
  const { handleCreateProject, creationState } = useCreateProject();
  const [createProjectData, setProjectData] = useImmer({
    projectName: "",
    projectKey: "",
    projectDescription: "",
  });

  const [allowAction] = useCheckRequiredValue({
    values: [
      !!createProjectData.projectDescription,
      !!createProjectData.projectKey,
      !!createProjectData.projectDescription,
    ],
    type: "and",
  });

  const updateProjectData = ({
    field,
    value,
  }: {
    field: projectDataFields;
    value: string;
  }) => {
    setProjectData((data) => {
      data[field] = value;
    });
  };

  if (creationState.called && creationState.data?.createProject) {
    onCancel();
    return <SuccessToast position="full" message="Project created!!" />;
  }

  console.log({ creationState });

  return (
    <>
      <StyledCreateProjectFiled>
        <Input
          name="projectName"
          label="Project name"
          placeholder="Enter name"
          type="text"
          value={createProjectData.projectName}
          onChangeHandler={({
            projectName,
            field,
          }: {
            projectName: string;
            field: projectDataFields;
          }) => {
            updateProjectData({ value: projectName, field });
          }}
        />
        <Input
          name="projectKey"
          type="text"
          value={createProjectData.projectKey}
          label="Project key"
          placeholder="Enter key"
          onChangeHandler={({
            projectKey,
            field,
          }: {
            projectKey: string;
            field: projectDataFields;
          }) => {
            updateProjectData({ value: projectKey, field });
          }}
        />
        <TextArea
          value={createProjectData.projectDescription}
          name="projectDescription"
          label="Project description"
          placeholder="Enter description"
          onChange={({
            projectDescription,
            field,
          }: {
            projectDescription: string;
            field: projectDataFields;
          }) => {
            updateProjectData({ value: projectDescription, field });
          }}
        />
      </StyledCreateProjectFiled>
      <StyledCreateProjectFooter>
        <TertiaryButton size="small" label="Cancel" onClick={onCancel} />
        <PrimaryButton
          size="small"
          disabled={!allowAction || creationState.loading}
          label={
            creationState.called && creationState.loading
              ? "Creating..."
              : "Create"
          }
          onClick={() => {
            handleCreateProject({
              id: nanoid(),
              name: createProjectData.projectName,
              description: createProjectData.projectDescription,
              projectKey: createProjectData.projectKey,
            });
          }}
        />
      </StyledCreateProjectFooter>
    </>
  );
};

export default CreateProject;
