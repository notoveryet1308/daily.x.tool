import { useState } from "react";
import { List } from "phosphor-react";

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
import MobileContentDrawer from "../../MobileContentDrawer";

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
    },
    setCreateTicketData,
    allowAction,
  } = useCreateTicketData();

  const [createStepOne, setCreateStepOne] = useState(true);
  const [editTicketPropertyOnMobile, setEditTicketPropertyOnMobile] =
    useState(false);

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

  const toggleEditPropTicket = () => {
    setEditTicketPropertyOnMobile(!editTicketPropertyOnMobile);
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
              ticketPriority={ticketPriority}
            />
          </div>
        </div>

        {inMobile && (
          <>
            <div
              className="set-property-footer"
              onClick={() => toggleEditPropTicket()}
            >
              <List className="list-icon" />
              Set properties
            </div>
            <MobileContentDrawer
              title="Set properties"
              isOpen={editTicketPropertyOnMobile}
              toggleDrawer={toggleEditPropTicket}
              height="calc(100vh - 120px)"
            >
              <TicketProperty
                ticketStatus={ticketStatus || ""}
                onChangeHandler={onChangeHandler}
                ticketPriority={ticketPriority}
              />
            </MobileContentDrawer>
          </>
        )}

        {!createStepOne && (
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
