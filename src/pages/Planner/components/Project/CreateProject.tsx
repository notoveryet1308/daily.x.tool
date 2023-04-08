import { useImmer } from "use-immer";

import { Input, TextArea } from "../../../../component/UI/Input";

import { StyledCreateProjectFiled } from "./style";
import { useCheckRequiredValue } from "../../../../hooks";
import { useCreateProject } from "../../graphql";
import { nanoid } from "nanoid";
import { SuccessToast } from "../../../../component/Toast";
import ActionFooter from "../ActionFooter";

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
      <ActionFooter
        onCancel={onCancel}
        cancelBtnLabel="Cancel"
        primaryActionLabel="Create"
        inProcessActionLabel="Creating.."
        allowAction={allowAction}
        loading={creationState.called && creationState.loading}
        onConfirm={() => {
          handleCreateProject({
            id: nanoid(),
            name: createProjectData.projectName,
            description: createProjectData.projectDescription,
            projectKey: createProjectData.projectKey,
          });
        }}
      />
    </>
  );
};

export default CreateProject;
