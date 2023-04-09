import { useState } from "react";
import { NavLink } from "react-router-dom";
import { PrimaryButton } from "../../../../component/UI/Button";
import { StyledCreateAndDraftAction } from "./style";
import CreateTicketShell from "../Ticket/CreateTicket";

const CreateAndDraftAction = () => {
  const [isCreateTicket, setCreateTicket] = useState(false);

  const handleTicketCreate = () => {
    setCreateTicket(!isCreateTicket);
  };

  return (
    <StyledCreateAndDraftAction className="create-and-draft-wrapper">
      <PrimaryButton
        className="create-ticket-btn"
        label="Create"
        onClick={handleTicketCreate}
        size="small"
      />
      <NavLink className="draft-nav-btn" to="planner/draft/ticket">
        Drafts
      </NavLink>

      {isCreateTicket && (
        <CreateTicketShell
          isCreating={isCreateTicket}
          onCancel={handleTicketCreate}
        />
      )}
    </StyledCreateAndDraftAction>
  );
};

export default CreateAndDraftAction;
