import { useState } from "react";

import { DropdownShell } from "../../../../component/UI/Dropdown";
import { Strategy } from "phosphor-react";
import ProjectContent from "./ProjectContent";
import { useScreenWidth } from "../../../../hooks";
import { breakpoints } from "../../../../theme/breakpoint";
import MobileContentDrawer from "../MobileContentDrawer";
import { StyledDrawerTitle } from "../../style";

const People = () => {
  const [openDrawer, setDrawerOpen] = useState(false);
  const [screenWidth] = useScreenWidth();
  const isMobile = screenWidth <= breakpoints.LARGE_MOBILE;

  const handleDrawerOpen = () => {
    if (isMobile) {
      setDrawerOpen(!openDrawer);
    }
  };

  return (
    <>
      <DropdownShell
        btnLabel="Project"
        btnIcon={<Strategy />}
        content={<ProjectContent />}
        transparentButton
        hideContent={isMobile}
        isContentVisible={openDrawer}
        onDropdownBtnClick={handleDrawerOpen}
      />  

      {isMobile && (
        <MobileContentDrawer
          toggleDrawer={handleDrawerOpen}
          isOpen={openDrawer}
          title={
            <StyledDrawerTitle>
              <Strategy className="drawer-title-icon" />
              <span className="label">Project</span>
            </StyledDrawerTitle>
          }
        >
          <ProjectContent />
        </MobileContentDrawer>
      )}
    </>
  );
};

export default People;
