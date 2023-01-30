import { DropdownShell } from "../../../component/UI/Dropdown";
import { ArrowsDownUp, Funnel } from "phosphor-react";

import Tags from "../../../component/Tags";
import FilterContent from "./FilterContent";
import SortContent from "./SortContent";

import { StyledDesktopFilter } from "./style";
import { useNoteContext } from "../../../Context/NoteDataProvider";

const DesktopFilter = () => {
  const { noteFilter } = useNoteContext();
  return (
    <StyledDesktopFilter>
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
    </StyledDesktopFilter>
  );
};

export default DesktopFilter;
