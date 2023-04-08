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
  const [hideContent, setHideContent] = useState(false);
  const [screenWidth] = useScreenWidth();
  const isMobile = screenWidth <= breakpoints.LARGE_MOBILE;

  const handleDropDownClick = () => {
    if (isMobile) {
      setDrawerOpen(!openDrawer);
    }

    setHideContent(false);
  };

  return (
    <>
      <DropdownShell
        btnLabel="Project"
        btnIcon={<Strategy />}
        content={<ProjectContent onHideContent={() => setHideContent(true)} />}
        transparentButton
        hideContent={isMobile}
        isContentVisible={openDrawer}
        onDropdownBtnClick={handleDropDownClick}
        closeDropdownContent={hideContent}
      />

      {isMobile && (
        <MobileContentDrawer
          toggleDrawer={handleDropDownClick}
          isOpen={openDrawer}
          title={
            <StyledDrawerTitle>
              <Strategy className="drawer-title-icon" />
              <span className="label">Project</span>
            </StyledDrawerTitle>
          }
        >
          <ProjectContent onHideContent={handleDropDownClick} />
        </MobileContentDrawer>
      )}
    </>
  );
};

export default People;
