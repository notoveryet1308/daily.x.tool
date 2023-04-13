import { Pencil } from "phosphor-react";

import Divider from "../../../../../component/UI/Divider";
import { noop } from "../../../../../utils";
import { ProjectFiled } from "../../../type";
import IssueTypeBase from "../../IssueType";
import { StyledCreateTicketStepOneView } from "./style";

const StepOneView = ({
  projectData,
  issueType,
  onEdit,
}: {
  projectData: ProjectFiled | null;
  issueType: string | null;
  onEdit: Function;
}) => {
  return (
    <StyledCreateTicketStepOneView>
      <span className="project-data-wrapper">
        Project name:
        <span className="project-data-value">{projectData?.name || "---"}</span>
      </span>
      <Divider type="vertical" className="step-one-view-divider" />
      <span className="project-data-wrapper">
        Issue type:
        {issueType ? (
          <IssueTypeBase type={issueType} onClick={noop} />
        ) : (
          <span className="project-data-value">---</span>
        )}
      </span>

      <span className="edit-step-one">
        <Pencil className="pencil-icon" onClick={() => onEdit()} />
      </span>
    </StyledCreateTicketStepOneView>
  );
};

export default StepOneView;
