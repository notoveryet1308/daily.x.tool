import { Input } from "../../../../component/UI/Input";
import { StyledPeopleContent } from "./style";

const PeopleContent = () => {
  return (
    <StyledPeopleContent>
      <Input placeholder="Search" name="projectPeople" bordered={false} />
    </StyledPeopleContent>
  );
};

export default PeopleContent;
