import { useLocation } from "react-router-dom";
import PlannerShell from "../../PlannerShell";

import PlannerActions from "../PlannerActions";
import StepOneView from "./CreateTicket/StepOneView";
import { StyledSingleTicket } from "./style";
import { useGetMyTeam, useViewSingleTicket } from "./hooks";
import Loader from "../../../../component/UI/Loader";
import TicketProperty from "./CreateTicket/TicketProperty";
import ViewFields from "./components/TicketTextFieldGroup/ViewField";
import { useState } from "react";
import CreateEditFields from "./components/TicketTextFieldGroup/CreateEditField";

const SingleTicket = () => {
  const [editTicket, setEditTicket] = useState(false);
  const { state } = useLocation();
  const { isProjectDataLoading, project, isTicketDataLoading, ticketData } =
    useViewSingleTicket({
      ticketId: state.ticketId,
      projectId: state.projectId,
    });
  const { teamDataLoading, teamMemberData } = useGetMyTeam();

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
                  onChangeHandler={() => {}}
                  onCancelEditing={() => setEditTicket(false)}
                />
              )}
            </div>
            <div className="single-ticket-right">
              <TicketProperty
                ticketAssigneeId={ticketData?.assignee?._id || null}
                ticketStatus={ticketData.status}
                ticketPriority={ticketData.priority}
                ticketReporter={ticketData.reporter}
                teamMemberData={teamMemberData}
                teamMemberDataLoading={teamDataLoading}
                onChangeHandler={() => {}}
              />
            </div>
          </StyledSingleTicket>
        )
      )}
    </PlannerShell>
  );
};

export default SingleTicket;
