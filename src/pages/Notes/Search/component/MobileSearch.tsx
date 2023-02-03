import { useState } from "react";
import { SecondaryButton } from "../../../../component/UI/Button";

import RDrawer from "../../../../component/UI/Drawer";
import NoteSearch from "./NoteSearch";
import { MagnifyingGlass } from "phosphor-react";
import { useScreenWidth } from "../../../../hooks";
import { breakpoints } from "../../../../theme/breakpoint";
import { useNoteContext } from "../../../../Context/NoteDataProvider";

const MobileSearch = () => {
  const { noteSearch } = useNoteContext();
  const [screenWidth] = useScreenWidth();
  const [isOpen, setOpen] = useState(false);
  const toggelSearch = () => {
    setOpen(!isOpen);
  };
  if (breakpoints.LARGE_MOBILE < screenWidth) {
    return null;
  }
  return (
    <>
      <RDrawer
        placement="bottom"
        open={isOpen}
        title="Search"
        onClose={toggelSearch}
        height="180"
        className="no-header-title"
      >
        <NoteSearch />
      </RDrawer>
      <SecondaryButton
        className="mobile-note-search-btn"
        onClick={toggelSearch}
        icon={<MagnifyingGlass className="note-search-icon mobile" />}
        isRounded
        isActive={!!noteSearch}
      />
    </>
  );
};

export default MobileSearch;
