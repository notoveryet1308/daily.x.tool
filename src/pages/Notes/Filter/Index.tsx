import { useScreenWidth } from "../../../hooks";
import { breakpoints } from "../../../theme/breakpoint";

import DesktopFilter from "./DesktopFilter";
import MobileFilter from "./MobileFilter";
import { StyledNoteFilter } from "./style";

const NoteFilter = () => {
  const [screenWidth] = useScreenWidth();

  return (
    <StyledNoteFilter>
      {screenWidth > breakpoints.TABLET ? <DesktopFilter /> : <MobileFilter />}
    </StyledNoteFilter>
  );
};

export default NoteFilter;
