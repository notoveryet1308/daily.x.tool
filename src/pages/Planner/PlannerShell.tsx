import React from "react";

import { StyledPlannerPage } from "./style";

const PlannerShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledPlannerPage>
      <div className="main-content-wrapper">
        <div className="main-content">{children}</div>
      </div>
    </StyledPlannerPage>
  );
};

export default PlannerShell;
