import { DropdownShell } from "../../../component/UI/Dropdown";
import { ArrowsDownUp, Funnel } from "phosphor-react";

import FilterContent from "./FilterContent";
import SortContent from "./SortContent";

import { StyledDesktopFilter } from "./style";
import { useNoteContext } from "../../../Context/NoteDataProvider";
import NoteSearch from "../Search/component/NoteSearch";

const DesktopFilter = () => {
  const { noteFilter } = useNoteContext();
  return (
    <StyledDesktopFilter>
      <div className="dropdown-wrapper">
        <DropdownShell
          btnLabel="Sort by"
          btnIcon={<ArrowsDownUp />}
          content={<SortContent />}
        />
        <DropdownShell
          btnLabel="Filter by"
          btnIcon={<Funnel />}
          content={<FilterContent />}
          multi
          selectedValueCount={
            noteFilter.colors.length + noteFilter.noteTags.length
          }
        />
      </div>
      <NoteSearch />
    </StyledDesktopFilter>
  );
};

export default DesktopFilter;
