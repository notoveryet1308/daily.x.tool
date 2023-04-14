import styled from "styled-components";

export const StyledDropdownShell = styled.div<{
  isSelected: boolean;
  contentZIndex: number;
  transparentButton: boolean;
  dropdownName: boolean;
}>`
  position: relative;
  width: 100%;

  .dropdown-shell-name {
    color: ${({ theme }) => theme.colors.primaryTextColor};
    font-size: 14px;
    margin-bottom: 8px;
  }

  .dd-shell-main-btn {
    width: 100%;
    padding: 8px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    background: ${({ theme, transparentButton }) =>
      !transparentButton ? theme.colors.secondaryBgColor : "transparent"};
    border-radius: 8px;
    border: 1px solid transparent;
    border-color: ${({ isSelected, theme }) =>
      isSelected ? theme.colors.primaryColor : "transparent"};
    cursor: pointer;

    .dd-shell-main-btn-label-wrapper {
      display: flex;
      gap: 4px;
      justify-content: flex-start;
      align-items: center;
      flex: 1;
      color: ${({ theme, isSelected }) =>
        isSelected
          ? theme.colors.primaryTextColor
          : theme.colors.secondaryTextColor};
      font-size: 14px;
      overflow-x: auto;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }

      .dd-shell-custom-icon {
        font-size: 20px;
        display: flex;
      }

      .dd-main-btn-label {
        white-space: nowrap;
      }
    }

    .dd-btn-caret-icon {
      font-size: 20px;
      color: ${({ theme }) => theme.colors.primaryTextColor};
      margin-left: 8px;
    }
  }

  .dd-content {
    width: 100%;
    position: absolute;
    top: ${({ dropdownName }) => (dropdownName ? "80px" : "48px")};
    left: 0;
    background: ${({ theme }) => theme.colors.primaryBgColor};
    z-index: ${({ contentZIndex }) => contentZIndex || 2};
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.primaryColor};
    /* padding: 12px; */

    .dd-content-empty {
      color: ${({ theme }) => theme.colors.secondaryTextColor};
      font-size: 14px;
    }
  }

  &&.disabled {
    .dd-shell-main-btn {
      cursor: no-drop;
    }
  }
`;
