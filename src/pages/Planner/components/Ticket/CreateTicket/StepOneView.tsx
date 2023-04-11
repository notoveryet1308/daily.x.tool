import { Pencil } from "phosphor-react";

import Divider from "../../../../../component/UI/Divider";
import { noop } from "../../../../../utils";
import { ProjectFiled } from "../../../type";
import IssueTypeBase from "../../IssueType";
import { StyledCreateTicketStepOneView } from "./style";

const StepOneView = ({
  projectData,
  issueType,
}: {
  projectData: ProjectFiled;
  issueType: string;
}) => {
  return (
    <StyledCreateTicketStepOneView>
      <span className="project-data-wrapper">
        Project name -
        <span className="project-data-value">{projectData.name}</span>
      </span>
      <Divider type="vertical" />
      <span className="project-data-wrapper">
        Issue type -
        <IssueTypeBase type={issueType} onClick={noop} />
      </span>

      <span className="edit-step-one">
        <Pencil className="pencil-icon" />
      </span>
    </StyledCreateTicketStepOneView>
  );
};

export default StepOneView;
