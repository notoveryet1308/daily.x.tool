import { useState } from "react";
import { DropdownShell } from "../../../component/UI/Dropdown";
import { ArrowsDownUp, Funnel } from "phosphor-react";

import FilterContent from "./FilterContent";
import SortContent from "./SortContent";

import { StyledMobileFilter, StyledMobileDrawerNoteFilter } from "./style";
import { PrimaryButton } from "../../../component/UI/Button";

const filterContent = {
  sort: { comp: <SortContent />, label: "Sort by" },
  filter: { comp: <FilterContent />, label: "Filter by" },
};

const MobileFilter = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [filterType, setFilterType] = useState<"sort" | "filter" | null>(null);
  const handleFilterClick = ({ name }: { name: "sort" | "filter" }) => {
    setFilterType(name);
    setDrawerOpen(true);
  };
  return (
    <StyledMobileFilter>
      <DropdownShell
        name="sort"
        btnLabel="Sort by"
        btnIcon={<ArrowsDownUp />}
        hideContent
        onDropdownBtnClick={handleFilterClick}
      />
      <DropdownShell
        name="filter"
        btnLabel="Filter by"
        btnIcon={<Funnel />}
        multi={false}
        hideContent
        onDropdownBtnClick={handleFilterClick}
      />
      {drawerOpen && (
        <StyledMobileDrawerNoteFilter
          title={filterType && filterContent[filterType].label}
          placement="bottom"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          {filterType && filterContent[filterType].comp}
          <PrimaryButton label="Apply" onClick={() => setDrawerOpen(false)} />
        </StyledMobileDrawerNoteFilter>
      )}
    </StyledMobileFilter>
  );
};

export default MobileFilter;
