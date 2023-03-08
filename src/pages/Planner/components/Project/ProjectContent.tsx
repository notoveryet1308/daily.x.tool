import { Input } from "../../../../component/UI/Input";
import { StyledProjectContent } from "./style";

const ProjectContent = () => {
  return (
    <StyledProjectContent>
      <Input placeholder="Search" name="projectPeople" bordered={false} />
    </StyledProjectContent>
  );
};

export default ProjectContent;
