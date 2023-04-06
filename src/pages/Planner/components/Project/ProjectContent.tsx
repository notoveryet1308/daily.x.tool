import { TertiaryButton, PrimaryButton } from "../../../../component/UI/Button";
import Loader from "../../../../component/UI/Loader";
import { useGetAllProjects } from "../../graphql";
import { ProjectFiled } from "../../type";
import CreateProject from "./CreateProject";
import ProjectCard from "./ProjectCard";
import { StyledProjectContent } from "./style";

const ProjectContent = () => {
  const { data, loading, error } = useGetAllProjects();

  console.log({ data, loading, error });

  return (
    <StyledProjectContent>
      <div className="project-list">
        {loading && <Loader />}
        {!loading &&
          !error &&
          data?.getAllProjects.map((data: ProjectFiled) => (
            <ProjectCard key={data.id} {...data} />
          ))}
      </div>
      <div className="project-content-footer">
        <TertiaryButton size="small" label="Cancel" onClick={() => {}} />
        <PrimaryButton size="small" label="Add Project" onClick={() => {}} />
      </div>
    </StyledProjectContent>
  );
};

export default ProjectContent;
