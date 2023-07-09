import React from "react";
import Drawer from "../../../../component/UI/Drawer";
import { useInMobile } from "../../../../hooks";

import { StyledModal, StyledDrawer } from "./style";

const Shell = ({
  children,
  toggleShell,
  title,
  open,
}: {
  children: React.ReactNode;
  toggleShell: Function;
  title: string;
  open: boolean;
}) => {
  const isMobile = useInMobile();
  return (
    <>
      {isMobile ? (
        <StyledDrawer
          open={open}
          onClose={() => toggleShell()}
          title={title}
          placement="bottom"
          height="auto"
        >
          {children}
        </StyledDrawer>
      ) : (
        <StyledModal
          open={open}
          onClose={toggleShell}
          title={title}
          align="center"
          showFooter={false}
        >
          {children}
        </StyledModal>
      )}
    </>
  );
};

export default Shell;
