import styled from 'styled-components';

export const StyledBaseButton = styled.button<{ variation?: string }>`
  padding: 4px 16px;
  white-space: nowrap;
  border: none;
  border-radius: 4px;
  line-height: 22px;
  cursor: pointer;

  &.primary-btn {
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.primaryBgColor};
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
  &.disabled-btn {
    cursor: no-drop;
    color: ${({ theme }) => theme.colors.disabledTextColor};
  }
`;
