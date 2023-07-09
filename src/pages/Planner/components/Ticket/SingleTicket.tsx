import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PlannerShell from "../../PlannerShell";

import PlannerActions from "../PlannerActions";
import StepOneView from "./CreateTicket/StepOneView";
import { StyledSingleTicket } from "./style";
import {
  useGetMyTeam,
  useUpdateDropdownFieldSingleTicket,
  useUpdateTextFieldSingleTicket,
  useViewSingleTicket,
} from "./hooks";
import Loader from "../../../../component/UI/Loader";
import TicketProperty, {
  TicketPropertyInMobile,
} from "./components/TicketPropertyGroup";
import ViewFields from "./components/TicketTextFieldGroup/ViewField";

import CreateEditFields from "./components/TicketTextFieldGroup/CreateEditField";

const SingleTicket = () => {
  const [editTicket, setEditTicket] = useState(false);
  const params = useParams<{ ticketKey: string }>();
  const { isProjectDataLoading, project, isTicketDataLoading, ticketData } =
    useViewSingleTicket({
      ticketKey: params.ticketKey,
    });
  const { teamDataLoading, teamMemberData } = useGetMyTeam();
  const { onDropdownValueChange, dropdownFieldData, updateTicketId } =
    useUpdateDropdownFieldSingleTicket();

  const {
    onTicketFieldChange,
    updateTextFiled,
    updateTextFiledTicketState,
    allowTextFieldUpdate,
  } = useUpdateTextFieldSingleTicket();

  useEffect(() => {
    if (ticketData?.id) {
      updateTicketId(ticketData.id);
    }

    if (updateTextFiledTicketState.data) {
      setEditTicket(false);
    }
  }, [ticketData?.id, updateTextFiledTicketState.data]);

  return (
    <PlannerShell>
      <PlannerActions />

      {isProjectDataLoading && isTicketDataLoading ? (
        <Loader />
      ) : (
        project &&
        ticketData && (
          <StyledSingleTicket>
            <div className="single-ticket-left">
              <StepOneView
                projectName={project?.name as string}
                issueType={ticketData.issueType}
              />
              {!editTicket ? (
                <ViewFields
                  summaryValue={ticketData.summary}
                  descriptionValue={ticketData.description}
                  onDoubleClick={() => setEditTicket(true)}
                />
              ) : (
                <CreateEditFields
                  isEditing={editTicket}
                  summaryValue={ticketData.summary}
                  descriptionValue={ticketData.description}
                  onCancelEditing={() => setEditTicket(false)}
                  onChangeHandler={onTicketFieldChange}
                  onSaveEdited={() => {
                    updateTextFiled(ticketData.id);
                  }}
                  allowTextFieldUpdate={allowTextFieldUpdate}
                  saveEditBtnLabel={
                    updateTextFiledTicketState.called &&
                    updateTextFiledTicketState.loading
                      ? "Saving..."
                      : "Save"
                  }
                />
              )}
            </div>
            <div className="single-ticket-right">
              <TicketProperty
                ticketAssigneeId={
                  dropdownFieldData.ticketAssigneeId ||
                  ticketData?.assignee?._id ||
                  null
                }
                ticketStatus={
                  dropdownFieldData.ticketStatus || ticketData.status
                }
                ticketPriority={
                  dropdownFieldData.ticketPriority || ticketData.priority
                }
                ticketReporter={ticketData.reporter}
                teamMemberData={teamMemberData}
                teamMemberDataLoading={teamDataLoading}
                onChangeHandler={onDropdownValueChange}
              />
            </div>
            <TicketPropertyInMobile
              ticketAssigneeId={
                dropdownFieldData.ticketAssigneeId ||
                ticketData?.assignee?._id ||
                null
              }
              ticketStatus={dropdownFieldData.ticketStatus || ticketData.status}
              ticketPriority={
                dropdownFieldData.ticketPriority || ticketData.priority
              }
              ticketReporter={ticketData.reporter}
              teamMemberData={teamMemberData}
              teamMemberDataLoading={teamDataLoading}
              onChangeHandler={onDropdownValueChange}
              footerLabel="Properties"
            />
          </StyledSingleTicket>
        )
      )}
    </PlannerShell>
  );
};

export default SingleTicket;
