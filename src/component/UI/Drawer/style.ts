import styled from "styled-components";
import { Drawer } from "antd";

export const StyledDrawer = styled(Drawer)`
  && .ant-drawer-content {
    background: ${({ theme }) => theme.colors.primaryBgColor};
    border-radius: 16px 16px 0 0;
    border: 1px solid ${({ theme }) => theme.colors.primaryGreyColor};
  }
  .ant-drawer-header {
    position: relative;
    .ant-drawer-title {
      color: ${({ theme }) => theme.colors.primaryTextColor};
    }

    .ant-drawer-close {
      position: absolute;
      right: 24px;
      color: ${({ theme }) => theme.colors.primaryTextColor};
    }

    border-color: ${({ theme }) => theme.colors.primaryColor};
  }

  .ant-drawer-body {
    display: flex;
    flex-direction: column;
  }

  &&.no-header-title {
    .ant-drawer-header {
      padding-top: 24px;
      border-color: transparent;

      .ant-drawer-title {
        display: none;
      }
    }
  }
`;
