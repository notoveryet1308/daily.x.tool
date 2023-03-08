import { Target } from "phosphor-react";
import Divider from "../../../../component/UI/Divider";
import { StyledPlannerActions } from "./style";
import People from "../People";
import Project from "../Project";
import CreateAndDraftAction from "./CreateAndDraftAction";

const PlannerActions = () => {
  return (
    <StyledPlannerActions>
      <div className="all-work-active-state">
        <Target className="target-icon" />
        <span className="my-work-label">My work</span>
      </div>
      <Divider type="vertical" style={{ height: "28px", margin: 0 }} />
      <div className="planner-dropdown-wrapper">
        <People />
        <Project />
      </div>
      <CreateAndDraftAction />
    </StyledPlannerActions>
  );
};

export default PlannerActions;
