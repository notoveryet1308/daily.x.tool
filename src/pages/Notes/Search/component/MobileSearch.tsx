import { useState } from "react";
import { CreateButton } from "../../../../component/UI/Button";
import RDrawer from "../../../../component/UI/Drawer";
import NoteSearch from "./NoteSearch";
import { MagnifyingGlass } from "phosphor-react";
import { useScreenWidth } from "../../../../hooks";
import { breakpoints } from "../../../../theme/breakpoint";

const MobileSearch = () => {
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
      >
        <NoteSearch />
      </RDrawer>
      <CreateButton
        className="mobile-note-search-btn"
        onClick={toggelSearch}
        label="search"
        icon={<MagnifyingGlass className="note-search-icon mobile" />}
      />
    </>
  );
};

export default MobileSearch;
