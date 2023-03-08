import PlannerActions from "./components/PlannerActions";
import { StyledPlannerPage } from "./style";

const Planner = () => {
  return (
    <StyledPlannerPage>
      <div className="main-content-wrapper">
        <div className="main-content">
          <div className="planner-actions-nav-wrapper">
            <PlannerActions />
          </div>
        </div>
      </div>
    </StyledPlannerPage>
  );
};

export default Planner;
