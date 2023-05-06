import styled from "styled-components";
import { Drawer, Radio } from "antd";

export const StyledRadio = styled(Radio)`
  color: ${({ theme }) => theme.colors.primaryTextColor};
  font-size: 14px;
`;

export const StyledSortContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 16px;

  .sort-by-date {
    display: flex;
    flex-direction: column;
    gap: 8px;

    &&& .ant-radio-checked {
      background: ${({ theme }) => theme.colors.primaryColor};
    }
  }
`;

export const StyledMobileDrawerNoteFilter = styled(Drawer)`
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
    padding: 0;
  }
`;

export const StyledNoteFilter = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;

  .reset-label {
    color: ${({ theme }) => theme.colors.primaryTextColor};
    font-size: 14px;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.primaryColor};
    }
  }
`;

export const StyledDesktopFilter = styled.div`
  width: 100%;
  position: relative;

  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;

  .dropdown-wrapper {
    display: flex;
    gap: 20px;
    flex: 1;
    max-width: 600px;
  }
`;

export const StyledMobileFilter = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  gap: 12px;
`;

export const StyledColorFilter = styled.div`
  position: relative;
  flex-direction: column;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  .color-label {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.secondaryTextColor};
  }

  .color-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
`;

export const StyledFilterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: flex-start;
  flex: 1;
  padding: 16px;
`;

export const StyledNoteTagFilter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .note-tag-label {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.secondaryTextColor};
  }

  .select-input-wrapper {
    background: ${({ theme }) => theme.colors.secondaryBgColor};
  }
`;
