import { useState } from "react";

import { DropdownShell } from "../../../../component/UI/Dropdown";
import { Strategy } from "phosphor-react";
import ProjectContent from "./ProjectContent";
import { useScreenWidth } from "../../../../hooks";
import { breakpoints } from "../../../../theme/breakpoint";
import MobileContentDrawer from "../MobileContentDrawer";
import { StyledDrawerTitle } from "../../style";
import CreateProjectContainer from "./CreateProject";

const People = () => {
  const [openDrawer, setDrawerOpen] = useState(false);
  const [hideContent, setHideContent] = useState(false);
  const [screenWidth] = useScreenWidth();
  const [isCreatingProject, setCreatingProject] = useState(false);
  const isMobile = screenWidth <= breakpoints.LARGE_MOBILE;

  const handleCreateProject = () => {
    setCreatingProject(!isCreatingProject);
    setHideContent(true);
  };

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
        content={
          <ProjectContent
            onHideContent={() => setHideContent(true)}
            handleCreateProject={handleCreateProject}
          />
        }
        transparentButton
        hideContent={isMobile}
        isContentVisible={openDrawer}
        onDropdownBtnClick={handleDropDownClick}
        closeDropdownContent={hideContent}
      />
      {isCreatingProject && (
        <CreateProjectContainer
          isCreatingProject={isCreatingProject}
          handleCreateProject={handleCreateProject}
        />
      )}

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
          {!isCreatingProject ? (
            <ProjectContent
              onHideContent={handleDropDownClick}
              handleCreateProject={handleCreateProject}
            />
          ) : (
            <CreateProjectContainer
              isCreatingProject={isCreatingProject}
              handleCreateProject={handleCreateProject}
            />
          )}
        </MobileContentDrawer>
      )}
    </>
  );
};

export default People;
