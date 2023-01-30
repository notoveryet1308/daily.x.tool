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
        multi={false}
        hideContent
        onDropdownBtnClick={handleFilterClick}
        isContentVisible={filterType === "filter"}
      />
      {drawerOpen && (
        <StyledMobileDrawerNoteFilter
          title={filterType && filterContent[filterType].label}
          placement="bottom"
          open={drawerOpen}
          onClose={onDrawerClose}
        >
          {filterType && filterContent[filterType].comp}
          <PrimaryButton label="Apply" onClick={onDrawerClose} />
        </StyledMobileDrawerNoteFilter>
      )}
    </StyledMobileFilter>
  );
};

export default MobileFilter;
