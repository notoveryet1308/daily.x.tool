import styled from "styled-components";

export const StyledPriorityLabel = styled.div<{ hexCode: string }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  .priority-icon {
    color: ${({ hexCode }) => hexCode};
    font-size: 16px;
  }

  .priority-name {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.primaryTextColor};
  }
`;
