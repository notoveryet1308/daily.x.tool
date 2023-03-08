import { DropdownShell } from "../../../../component/UI/Dropdown";
import { Strategy } from "phosphor-react";
import ProjectContent from "./ProjectContent";

const People = () => {
  return (
    <DropdownShell
      btnLabel="Project"
      btnIcon={<Strategy />}
      content={<ProjectContent />}
      transparentButton
    />
  );
};

export default People;
