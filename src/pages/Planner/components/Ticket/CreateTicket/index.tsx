import { useState } from "react";
import { useCreateTicketData } from "../hooks";
import { StyledCreateTicket } from "./style";
import CreateTicketStepOneShell from "./StepOne";
import StepOneView from "./StepOneView";
import PlannerShell from "../../../PlannerShell";
import Back from "../../../../../component/UI/Back";
import {
  PrimaryButton,
  TertiaryButton,
} from "../../../../../component/UI/Button";
import { useInMobile } from "../../../../../hooks";
import TicketSummary from "./TicketSummary";
import TicketDetail from "./TicketDetail";
import TicketProperty from "./TicketProperty";
import Divider from "../../../../../component/UI/Divider";

const CreateTicket = () => {
  const inMobile = useInMobile();

  const {
    createTicketData: {
      project,
      issueType,
      ticketSummary,
      ticketDetail,
      ticketStatus,
    },
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
        <div className={`ticket-creation-action ${inMobile && "in-mobile"}`}>
          <Back isMobile={inMobile} />
          <div className="action-btn-wrapper">
            <TertiaryButton
              size="small"
              label="Save as draft"
              onClick={() => {}}
            />
            <PrimaryButton size="small" label="Publish" onClick={() => {}} />
          </div>
        </div>

        <div className="ticket-input-field">
          <div className="input-section-left">
            <StepOneView
              issueType={issueType}
              projectData={project}
              onEdit={handleCreateStepOne}
            />

            <TicketSummary
              isEditing
              value={ticketSummary || ""}
              onChangeHandler={onChangeHandler}
            />

            <TicketDetail
              onChangeHandler={onChangeHandler}
              value={ticketDetail}
              isCreating
            />
          </div>
          <Divider type="vertical" />
          <div className="input-section-right">
            <TicketProperty
              ticketStatus={ticketStatus || ""}
              onChangeHandler={onChangeHandler}
            />
          </div>
        </div>

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
