import styled from 'styled-components';

export const StyledToolbarButton = styled.button<{ active: boolean }>`
  border: none;
  display: flex;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 2px;
  align-items: center;
  justify-content: center;

  background: ${({ active, theme }) =>
    active ? theme.colors.primaryColor : 'inherit'};

  .ph-icon {
    font-size: 16px;
    color: ${({ theme, active }) =>
      active
        ? theme.colors.primaryTextColorReversed
        : theme.colors.primaryTextColor};
  }
`;

export const StyledToolbar = styled.div`
  gap: 4px;
  display: flex;
  padding: 4px 0;
  flex-wrap: wrap;
  margin-bottom: 16px;
  align-items: center;
  justify-content: center;
  background-color: inherit;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryColor};
`;
