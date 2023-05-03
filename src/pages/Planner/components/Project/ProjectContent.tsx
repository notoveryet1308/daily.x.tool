import { useState } from "react";

import { TertiaryButton, PrimaryButton } from "../../../../component/UI/Button";

import Loader from "../../../../component/UI/Loader";
import { useGetAllProjects } from "../../graphql";
import { ProjectFiled } from "../../type";
import CreateProject from "./CreateProject";
import ProjectCard from "./ProjectCard";
import { StyledProjectContent } from "./style";

import { useScreenWidth } from "../../../../hooks";
import { breakpoints } from "../../../../theme/breakpoint";
import { InlineNoDataFound } from "../../../../component/UI/NoDataState";
import { Strategy } from "phosphor-react";
import { StyledModal } from "../../style";

const ProjectContent = ({
  onHideContent,
  handleCreateProject,
}: {
  onHideContent: Function;
  handleCreateProject: Function;
}) => {
  const { data, loading, error } = useGetAllProjects();

  return (
    <StyledProjectContent>
      <div className="project-list">
        {loading && <Loader />}
        {!loading &&
          !error &&
          (data?.getAllProjects.length ? (
            data.getAllProjects.map((data: ProjectFiled) => (
              <ProjectCard key={data.id} {...data} />
            ))
          ) : (
            <InlineNoDataFound
              icon={<Strategy />}
              mainText="No project found!!"
              subText="Hurry and create project"
            />
          ))}
      </div>
      <div className="project-content-footer">
        <TertiaryButton size="small" label="Cancel" onClick={onHideContent} />
        <PrimaryButton
          size="small"
          label="Add Project"
          onClick={handleCreateProject}
        />
      </div>
    </StyledProjectContent>
  );
};

export default ProjectContent;
