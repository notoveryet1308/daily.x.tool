import { useState } from "react";
import { DropdownShell } from "../../../component/UI/Dropdown";
import { ArrowsDownUp, Funnel } from "phosphor-react";

import FilterContent from "./FilterContent";
import SortContent from "./SortContent";

import { StyledMobileFilter, StyledMobileDrawerNoteFilter } from "./style";
import { PrimaryButton } from "../../../component/UI/Button";
import { useNoteContext } from "../../../Context/NoteDataProvider";

const filterContent = {
  sort: { comp: <SortContent />, label: "Sort by" },
  filter: { comp: <FilterContent />, label: "Filter by" },
};

const MobileFilter = () => {
  const { noteFilter } = useNoteContext();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [filterType, setFilterType] = useState<"sort" | "filter" | null>(null);
  const handleFilterClick = ({ name }: { name: "sort" | "filter" }) => {
    setFilterType(name);
    setDrawerOpen(true);
  };

  const onDrawerClose = () => {
    setDrawerOpen(false);
    setFilterType(null);
  };

  return (
    <StyledMobileFilter>
      <DropdownShell
        name="sort"
        btnLabel="Sort by"
        btnIcon={<ArrowsDownUp />}
        hideContent
        onDropdownBtnClick={handleFilterClick}
        isContentVisible={filterType === "sort"}
      />
      <DropdownShell
        name="filter"
        btnLabel="Filter by"
        btnIcon={<Funnel />}
        multi
        hideContent
        onDropdownBtnClick={handleFilterClick}
        isContentVisible={filterType === "filter"}
        selectedValueCount={
          noteFilter.colors.length + noteFilter.noteTags.length
        }
      />
      {drawerOpen && (
        <StyledMobileDrawerNoteFilter
          title={filterType && filterContent[filterType].label}
          placement="bottom"
          open={drawerOpen}
          onClose={onDrawerClose}
          height="300px"
        >
          {filterType && filterContent[filterType].comp}
        </StyledMobileDrawerNoteFilter>
      )}
    </StyledMobileFilter>
  );
};

export default MobileFilter;
