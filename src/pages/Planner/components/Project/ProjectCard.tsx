import Divider from "../../../../component/UI/Divider";
import { StyledProjectCard } from "./style";
import { ProjectFiled } from "../../type";

const ProjectCard = (props: ProjectFiled) => {
  const { tickets, name, owner, projectKey } = props;
  return (
    <StyledProjectCard to="#">
      <h3 className="project-name">{name}</h3>
      <Divider type="horizontal" style={{ margin: "4px 0" }} />
      <div className="project-details">
        <span className="project-filed-info project-key">
          ProjectKey: <span className="project-filed-value">{projectKey}</span>
        </span>
        <span className="project-filed-info project-tickets">
          Tickets:
          <span className="project-filed-value">{tickets?.length || "0"}</span>
        </span>
        <span className="project-filed-info created-by">
          Created by:
          <span className="project-filed-value">{owner.name || "--"}</span>
        </span>
        <span className="project-filed-info team-member">
          Team member:
          <span className="project-filed-value">
            {owner.teamMember?.length || "--"}
          </span>
        </span>
      </div>
    </StyledProjectCard>
  );
};

export default ProjectCard;
