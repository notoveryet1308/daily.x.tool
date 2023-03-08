import { DropdownShell } from "../../../../component/UI/Dropdown";
import { Users } from "phosphor-react";
import PeopleContent from "./PeopleContent";

const People = () => {
  return (
    <DropdownShell
      btnLabel="People"
      btnIcon={<Users />}
      content={<PeopleContent />}
      transparentButton
    />
  );
};

export default People;
