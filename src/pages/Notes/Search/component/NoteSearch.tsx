import { MagnifyingGlass } from "phosphor-react";
import { Input } from "../../../../component/UI/Input";

import { StyledNoteSearch } from "./style";
const NoteSearch = () => {
  return (
    <StyledNoteSearch>
      <Input
        type="text"
        label="search"
        name="noteSearch"
        onChangeHandler={() => {}}
        placeholder="Search.."
        value=""
        className="note-search"
      />
      <MagnifyingGlass className="search-icon" />
    </StyledNoteSearch>
  );
};

export default NoteSearch;
