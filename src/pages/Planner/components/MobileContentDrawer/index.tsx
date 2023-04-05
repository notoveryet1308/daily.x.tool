import { ReactNode } from "react";

import { StyledDrawerTitle } from "./style";

import Drawer from "../../../../component/UI/Drawer";

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
    <Drawer
      placement="bottom"
      open={isOpen}
      onClose={toggleDrawer}
      title={title}
    >
      {children}
    </Drawer>
  );
};

export default MobileContentDrawer;
