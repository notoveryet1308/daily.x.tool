import { DropdownShell } from "../../../../component/UI/Dropdown";
import { useState } from "react";
import { Users } from "phosphor-react";
import PeopleContent from "./PeopleContent";
import { useScreenWidth } from "../../../../hooks";

import { breakpoints } from "../../../../theme/breakpoint";
import { StyledDrawerTitle } from "../../style";
import MobileContentDrawer from "../MobileContentDrawer";

const People = () => {
  const [openDrawer, setDrawerOpen] = useState(false);
  const [screenWidth] = useScreenWidth();
  const [hideContent, setHideContent] = useState(false);
  const isMobile = screenWidth <= breakpoints.LARGE_MOBILE;

  const handleDrawerOpen = () => {
    if (isMobile) {
      setDrawerOpen(!openDrawer);
    }
  };

  return (
    <>
      <DropdownShell
        btnLabel="People"
        btnIcon={<Users />}
        content={<PeopleContent onHideContent={() => setHideContent(true)} />}
        hideContent={isMobile}
        transparentButton
        onDropdownBtnClick={handleDrawerOpen}
        isContentVisible={openDrawer}
        closeDropdownContent={hideContent}
      />
      {isMobile && (
        <MobileContentDrawer
          toggleDrawer={handleDrawerOpen}
          isOpen={openDrawer}
          title={
            <StyledDrawerTitle>
              <Users className="drawer-title-icon" />
              <span className="label">People</span>
            </StyledDrawerTitle>
          }
        >
          <PeopleContent onHideContent={handleDrawerOpen} />
        </MobileContentDrawer>
      )}
    </>
  );
};

export default People;
