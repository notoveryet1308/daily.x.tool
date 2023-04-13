import { ReactNode } from "react";

import { StyledDrawerTitle, StyledDrawer } from "./style";

type MobileContentDrawerProps = {
  toggleDrawer: Function;
  isOpen: boolean;
  title: ReactNode;
  children: ReactNode;
  height?: string;
};

const MobileContentDrawer = ({
  toggleDrawer,
  isOpen,
  title,
  children,
  height = "auto",
}: MobileContentDrawerProps) => {
  return (
    <StyledDrawer
      placement="bottom"
      open={isOpen}
      onClose={toggleDrawer}
      title={title}
      height={height}
    >
      {children}
    </StyledDrawer>
  );
};

export default MobileContentDrawer;
