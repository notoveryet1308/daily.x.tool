import { noop } from "../../../../../utils";
import MemberLabel from "../../MemberLabel";
import PriorityLabel from "../../PriorityLabel";
import BaseStatusTag from "../../StatusTag";
import { StyledMobileTicketCard } from "./style";

const MobileTicketCard = ({
  ticketKey,
  ticketPriority,
  ticketSummary,
  ticketStatus,
  ticketAssignee,
}: {
  ticketKey: string;
  ticketPriority: string;
  ticketSummary: string;
  ticketStatus: string;
  ticketAssignee?: { name: string; avatar?: string };
}) => {
  return (
    <StyledMobileTicketCard href={`/planner/ticket/${ticketKey}`}>
      <span className="mob-ticket-card top-row ticket-key">{ticketKey}</span>
      <div className="mob-ticket-card middle-row">
        <PriorityLabel type={ticketPriority} onClick={noop} showLabel={false} />
        <span className="ticket-summary">{ticketSummary}</span>
      </div>
      <div className="mob-ticket-card bottom-row">
        <BaseStatusTag type={ticketStatus} onClick={noop} />
        {ticketAssignee ? (
          <MemberLabel
            name={ticketAssignee.name}
            avatar={ticketAssignee.avatar}
            onClick={noop}
          />
        ) : (
          <span className="ticket-unassigned">UNASSIGNED</span>
        )}
      </div>
    </StyledMobileTicketCard>
  );
};

export default MobileTicketCard;
