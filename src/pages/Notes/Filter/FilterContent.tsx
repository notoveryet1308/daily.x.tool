import ColorFilter from "./ColorFilter";
import NoteTagFilter from "./NoteTagFilter";

import { StyledFilterContent } from "./style";

const FilterContent = () => {
  return (
    <StyledFilterContent>
      <ColorFilter />
      <NoteTagFilter />
    </StyledFilterContent>
  );
};

export default FilterContent;
