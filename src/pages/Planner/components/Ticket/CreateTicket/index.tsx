import { useState } from "react";
import { useCreateTicketData } from "../hooks";
import { StyledCreateTicket } from "./style";
import CreateTicketStepOneShell from "./StepOne";
import StepOneView from "./StepOneView";
import PlannerShell from "../../../PlannerShell";

const CreateTicket = () => {
  const {
    createTicketData: { project, issueType },
    setCreateTicketData,
    allowAction,
  } = useCreateTicketData();

  const [createStepOne, setCreateStepOne] = useState(true);

  const handleCreateStepOne = () => {
    setCreateStepOne(!createStepOne);
  };

  const onChangeHandler = ({
    value,
    field,
  }: {
    value: string;
    field: "project" | "issueType";
  }) => {
    setCreateTicketData((draft) => {
      draft[field] = value;
    });
  };

  return (
    <PlannerShell>
      <StyledCreateTicket>
        {project && issueType && (
          <StepOneView issueType={issueType} projectData={project} />
        )}

        {createStepOne && (
          <CreateTicketStepOneShell
            isCreating={createStepOne}
            projectName={project?.name || ""}
            issueType={issueType || ""}
            allowAction={allowAction}
            onClickHandler={onChangeHandler}
            onConfirm={handleCreateStepOne}
          />
        )}
      </StyledCreateTicket>
    </PlannerShell>
  );
};

export default CreateTicket;
