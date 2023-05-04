import { Plus } from "phosphor-react";
import { useHistory } from "react-router-dom";
import { CreateButton, PrimaryButton } from "../../../../component/UI/Button";
import { StyledCreateAndDraftAction } from "./style";
import { useInMobile } from "../../../../hooks";

const CreateAndDraftAction = () => {
  const history = useHistory();
  const inMobile = useInMobile();
  return (
    <>
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
      {inMobile && (
        <CreateButton
          className="create-ticket-btn-mobile"
          label="Create"
          icon={<Plus />}
          onClick={() => history.push("/planner/create")}
        />
      )}
    </>
  );
};

export default CreateAndDraftAction;
