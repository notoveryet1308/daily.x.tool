import { DropdownShell } from "../../../component/UI/Dropdown";
import { ArrowsDownUp, Funnel } from "phosphor-react";

import FilterContent from "./FilterContent";
import SortContent from "./SortContent";

import { StyledDesktopFilter } from "./style";

const DesktopFilter = () => {
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
        multi={false}
      />
    </StyledDesktopFilter>
  );
};

export default DesktopFilter;
