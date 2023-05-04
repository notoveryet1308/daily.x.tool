import { useState } from "react";
import { Redirect } from "react-router-dom";

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
import TicketProperty, {
  TicketPropertyInMobile,
} from "../components/TicketPropertyGroup";
import Divider from "../../../../../component/UI/Divider";

import CreateEditFields from "../components/TicketTextFieldGroup/CreateEditField";

const CreateTicket = () => {
  const inMobile = useInMobile();

  const {
    createTicketData: {
      project,
      issueType,
      ticketSummary,
      ticketDetail,
      ticketStatus,
      ticketPriority,
      ticketAssigneeId,
      ticketReporter,
    },
    setCreateTicketData,
    allowActionStepOne,
    teamDataLoading,
    teamMemberData,
    allowActionPublish,
    publishTicketHandler,
    isTicketPublishing,
    isTicketPublished,
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
    field: string;
  }) => {
    setCreateTicketData((draft) => {
      draft[field] = value;
    });
  };

  if (isTicketPublished) {
    return <Redirect to="/planner" />;
  }

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
            <PrimaryButton
              size="small"
              label={isTicketPublishing ? "Publishing" : "Publish"}
              disabled={!allowActionPublish}
              onClick={() => {
                publishTicketHandler();
              }}
            />
          </div>
        </div>

        <div className="ticket-input-field">
          <div className="input-section-left">
            <StepOneView
              issueType={issueType}
              projectName={project?.name || null}
              onEdit={handleCreateStepOne}
            />
            <CreateEditFields
              summaryValue={ticketSummary || ""}
              descriptionValue={ticketDetail || ""}
              onChangeHandler={onChangeHandler}
            />
          </div>
          <Divider type="vertical" />
          <div className="input-section-right">
            <TicketProperty
              ticketStatus={ticketStatus || ""}
              onChangeHandler={onChangeHandler}
              ticketPriority={ticketPriority}
              ticketAssigneeId={ticketAssigneeId}
              teamMemberData={teamMemberData}
              teamMemberDataLoading={teamDataLoading}
              ticketReporter={ticketReporter}
            />
          </div>
        </div>

        <TicketPropertyInMobile
          ticketStatus={ticketStatus || ""}
          onChangeHandler={onChangeHandler}
          ticketPriority={ticketPriority}
          ticketAssigneeId={ticketAssigneeId || null}
          teamMemberData={teamMemberData}
          teamMemberDataLoading={teamDataLoading}
          ticketReporter={ticketReporter || null}
          footerLabel="Set properties"
        />

        {createStepOne && (
          <CreateTicketStepOneShell
            isCreating={createStepOne}
            projectName={project?.name || ""}
            issueType={issueType || ""}
            allowAction={allowActionStepOne}
            onClickHandler={onChangeHandler}
            onConfirm={handleCreateStepOne}
          />
        )}
      </StyledCreateTicket>
    </PlannerShell>
  );
};

export default CreateTicket;
