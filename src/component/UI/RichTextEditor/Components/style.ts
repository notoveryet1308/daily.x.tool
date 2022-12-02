import styled from 'styled-components';

export const StyledToolbarButton = styled.button<{ active: boolean }>`
  border: none;
  cursor: pointer;
  padding: 4px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;

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
  display: flex;
  gap: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryColor};
  padding: 4px 0;
  margin-bottom: 16px;
  background-color: inherit;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
