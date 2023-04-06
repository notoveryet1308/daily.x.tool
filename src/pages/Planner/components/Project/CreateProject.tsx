import { Input, TextArea } from "../../../../component/UI/Input";
import { StyledCreateProjectFiled, StyledCreateProjectFooter } from "./style";

const CreateProject = () => {
  return (
    <>
      <StyledCreateProjectFiled>
        <Input label="Project name" placeholder="Enter name" />
        <Input label="Project key" placeholder="Enter key" />
        <TextArea label="Project description" placeholder="Enter description" />
      </StyledCreateProjectFiled>
      <StyledCreateProjectFooter></StyledCreateProjectFooter>
    </>
  );
};

export default CreateProject;
 