import { useHistory, useParams, useLocation } from "react-router-dom";
import PlannerShell from "../../PlannerShell";
import { useGetAllProjects } from "../../graphql";
import { TicketFiled } from "../../type";
import PlannerActions from "../PlannerActions";
import StepOneView from "./CreateTicket/StepOneView";
import { StyledSingleTicket } from "./style";
import { useViewSingleTicket } from "./hooks";

const SingleTicket = () => {
  const { state } = useLocation();
  const {} = useViewSingleTicket({
    ticketId: state.ticketId,
    projectId: state.projectId,
  });

  return (
    <PlannerShell>
      <PlannerActions />
      <StyledSingleTicket>
        {/* <StepOneView projectName={ticketData.} /> */}
      </StyledSingleTicket>
    </PlannerShell>
  );
};

export default SingleTicket;
