import styled from "styled-components";

export const StyledBaseButton = styled.button<{ variation?: string }>`
  padding: 8px 16px;
  white-space: nowrap;
  border: none;
  border-radius: 4px;
  line-height: 22px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.medium};

  &.primary-btn {
    background-color: ${({ theme }) => theme.colors.primaryColor};
  }

  &.secondary-btn {
    color: ${({ theme }) => theme.colors.primaryTextColor};
    border: 1px solid ${({ theme }) => theme.colors.primaryColor};
    background-color: inherit;
  }
  &.disabled-btn {
    cursor: no-drop;
    color: ${({ theme }) => theme.colors.disabledColor};
  }
`;

export const StyledCreateBtn = styled.button`
  padding: 16px 30px;
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
