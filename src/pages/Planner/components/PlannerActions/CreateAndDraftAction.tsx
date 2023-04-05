import { NavLink } from "react-router-dom";
import { PrimaryButton } from "../../../../component/UI/Button";
import { StyledCreateAndDraftAction } from "./style";

const CreateAndDraftAction = () => {
  return (
    <StyledCreateAndDraftAction className="create-and-draft-wrapper">
      <PrimaryButton
        className="create-ticket-btn"
        label="Create"
        onClick={() => {}}
      />
      <NavLink className="draft-nav-btn" to="planner/draft/ticket">
        Drafts
      </NavLink>
    </StyledCreateAndDraftAction>
  );
};

export default CreateAndDraftAction;
