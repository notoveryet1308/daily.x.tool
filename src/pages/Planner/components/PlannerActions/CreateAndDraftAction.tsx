import { NavLink, useHistory } from "react-router-dom";
import { PrimaryButton } from "../../../../component/UI/Button";
import { StyledCreateAndDraftAction } from "./style";

const CreateAndDraftAction = () => {
  const history = useHistory();

  return (
    <StyledCreateAndDraftAction className="create-and-draft-wrapper">
      <PrimaryButton
        className="create-ticket-btn"
        label="Create"
        onClick={() => history.push("/planner/create")}
        size="small"
      />
      {/* <NavLink className="draft-nav-btn" to="planner/draft/ticket">
        Drafts
      </NavLink> */}
    </StyledCreateAndDraftAction>
  );
};

export default CreateAndDraftAction;
