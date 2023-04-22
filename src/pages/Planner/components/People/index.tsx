import { DropdownShell } from "../../../../component/UI/Dropdown";
import { useState } from "react";
import { Users } from "phosphor-react";
import PeopleContent from "./PeopleContent";
import { useScreenWidth } from "../../../../hooks";

import { breakpoints } from "../../../../theme/breakpoint";
import { StyledDrawerTitle } from "../../style";
import MobileContentDrawer from "../MobileContentDrawer";
import AddToTeamContainer from "./AddToTeam";

const People = () => {
  const [openDrawer, setDrawerOpen] = useState(false);
  const [screenWidth] = useScreenWidth();
  const [hideContent, setHideContent] = useState(false);
  const [isAddingMember, setAddingMember] = useState(false);

  const handleAddingMember = () => {
    setAddingMember(!isAddingMember);
    setHideContent(true);
  };

  const isMobile = screenWidth <= breakpoints.LARGE_MOBILE;

  const handleDrawerOpen = () => {
    if (isMobile) {
      setDrawerOpen(!openDrawer);
    }
    setHideContent(false);
  };

  return (
    <>
      <DropdownShell
        btnLabel="People"
        btnIcon={<Users />}
        content={
          <PeopleContent
            onHideContent={() => setHideContent(true)}
            handleAddingMember={handleAddingMember}
          />
        }
        hideContent={isMobile}
        transparentButton
        onDropdownBtnClick={handleDrawerOpen}
        isContentVisible={openDrawer}
        closeDropdownContent={hideContent}
      />
      {isAddingMember && (
        <AddToTeamContainer
          handleAddingMember={handleAddingMember}
          isAddingMember={isAddingMember}
        />
      )}
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
          {!isAddingMember ? (
            <PeopleContent
              onHideContent={handleDrawerOpen}
              handleAddingMember={handleAddingMember}
            />
          ) : (
            <AddToTeamContainer
              handleAddingMember={handleAddingMember}
              isAddingMember={isAddingMember}
            />
          )}
        </MobileContentDrawer>
      )}
    </>
  );
};

export default People;
