import { MagnifyingGlass } from "phosphor-react";
import { Input } from "../../../../component/UI/Input";
import { useNoteContext } from "../../../../Context/NoteDataProvider";

import { StyledNoteSearch } from "./style";
const NoteSearch = () => {
  const { noteSearch, noteDispatch } = useNoteContext();
  return (
    <StyledNoteSearch>
      <Input
        type="text"
        name="noteSearch"
        onChangeHandler={({ noteSearch }: { noteSearch: string }) => {
          noteDispatch({ type: "update-note-search", payload: noteSearch });
        }}
        placeholder="Search.."
        value={noteSearch}
        className="note-search"
      />
      <MagnifyingGlass
        className="search-icon"
        onClick={() => noteDispatch({ type: "reset-note-search", payload: "" })}
      />
    </StyledNoteSearch>
  );
};

export default NoteSearch;
