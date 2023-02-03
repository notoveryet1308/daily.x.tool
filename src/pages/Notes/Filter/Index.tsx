import { useNoteContext } from "../../../Context/NoteDataProvider";
import { useScreenWidth } from "../../../hooks";
import { breakpoints } from "../../../theme/breakpoint";

import DesktopFilter from "./DesktopFilter";
import MobileFilter from "./MobileFilter";
import { StyledNoteFilter } from "./style";

const NoteFilter = () => {
  const { noteFilter, noteSearch, noteDispatch } = useNoteContext();
  const [screenWidth] = useScreenWidth();

  return (
    <StyledNoteFilter>
      {screenWidth > breakpoints.TABLET ? <DesktopFilter /> : <MobileFilter />}
      {(noteFilter.colors.length ||
        noteFilter.noteTags.length ||
        noteSearch) && (
        <p
          className="reset-label"
          onClick={() => {
            noteDispatch({ type: "reset-note-filter", payload: "" });
            noteDispatch({ type: "reset-note-search", payload: "" });
          }}
        >
          Reset filters
        </p>
      )}
    </StyledNoteFilter>
  );
};

export default NoteFilter;
