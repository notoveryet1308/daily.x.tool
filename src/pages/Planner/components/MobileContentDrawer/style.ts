import styled from "styled-components";

import Drawer from "../../../../component/UI/Drawer";

export const StyledDrawerTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  .label {
    color: ${({ theme }) => theme.colors.primaryTextColor};
  }
`;

export const StyledDrawer = styled(Drawer)`
  && .ant-drawer-body {
    padding: 16px 16px 0 16px;
  }
`;
