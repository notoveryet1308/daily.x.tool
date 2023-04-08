import { ReactNode } from "react";

import { StyledDrawerTitle, StyledDrawer } from "./style";

type MobileContentDrawerProps = {
  toggleDrawer: Function;
  isOpen: boolean;
  title: ReactNode;
  children: ReactNode;
};

const MobileContentDrawer = ({
  toggleDrawer,
  isOpen,
  title,
  children,
}: MobileContentDrawerProps) => {
  return (
    <StyledDrawer
      placement="bottom"
      open={isOpen}
      onClose={toggleDrawer}
      title={title}
      height="auto"
    >
      {children}
    </StyledDrawer>
  );
};

export default MobileContentDrawer;
