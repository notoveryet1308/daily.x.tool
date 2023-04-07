import { useState } from "react";

import { TertiaryButton, PrimaryButton } from "../../../../component/UI/Button";
import Modal from "../../../../component/UI/Modal";

import Loader from "../../../../component/UI/Loader";
import { useGetAllProjects } from "../../graphql";
import { ProjectFiled } from "../../type";
import CreateProject from "./CreateProject";
import ProjectCard from "./ProjectCard";
import { StyledProjectContent, StyledModal } from "./style";
import { useScreenWidth } from "../../../../hooks";
import { breakpoints } from "../../../../theme/breakpoint";
import { InlineNoDataFound } from "../../../../component/UI/NoDataState";
import { Strategy } from "phosphor-react";

const ProjectContent = ({ onHideContent }: { onHideContent: Function }) => {
  const [screenWidth] = useScreenWidth();

  const [isCreatingProject, setCreatingProject] = useState(false);
  const { data, loading, error } = useGetAllProjects();

  console.log({ data, loading, error });

  const handleCreateProject = () => {
    setCreatingProject(!isCreatingProject);
  };

  if (isCreatingProject) {
    return (
      <>
        {screenWidth > breakpoints.LARGE_MOBILE ? (
          <StyledModal
            open={isCreatingProject}
            onClose={handleCreateProject}
            title="Project"
            align="center"
            showFooter={false}
          >
            <CreateProject onCancel={handleCreateProject} />
          </StyledModal>
        ) : (
          <CreateProject onCancel={handleCreateProject} />
        )}
      </>
    );
  }

  console.log({ PP: data?.getAllProject });

  return (
    <StyledProjectContent>
      <div className="project-list">
        {loading && <Loader />}
        {!loading &&
          !error &&
          (data?.getAllProjects ? (
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
