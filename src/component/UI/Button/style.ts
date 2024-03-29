import styled from "styled-components";

export const StyledBaseButton = styled.button<{ variation?: string }>`
  position: relative;
  padding: 8px 16px;
  white-space: nowrap;
  border: none;
  border-radius: 4px;
  line-height: 22px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.medium};

  &.small {
    padding: 4px 8px;
  }

  .active {
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.successColor};
    top: -1px;
    right: 0;
  }

  &.rounded {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &.primary-btn {
    background-color: ${({ theme }) => theme.colors.primaryColor};
  }

  &.secondary-btn {
    color: ${({ theme }) => theme.colors.primaryTextColor};
    border: 1px solid ${({ theme }) => theme.colors.primaryColor};
    background-color: inherit;
  }
  &.tertiary-btn {
    border: none;
    background-color: inherit;
    color: ${({ theme }) => theme.colors.primaryTextColor};
  }
  &.disabled-btn {
    cursor: no-drop;
    color: ${({ theme }) => theme.colors.disabledColor};
  }
`;

export const StyledCreateBtn = styled.button`
  padding: 8px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8px;
  border: none;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.createBtnBg};
  color: ${({ theme }) => theme.colors.primaryTextColorReversed};
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: bold;
  cursor: pointer;
  transition: transform 300ms ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.LARGE_MOBILE}px) {
    display: flex;
    flex-direction: column-reverse;
    padding: 16px;

    .btn-label {
      display: none;
    }
  }
`;
