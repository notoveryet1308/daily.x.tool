import styled from "styled-components";

export const StyledPriorityLabel = styled.div<{ hexCode: string }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  padding: 4px 8px 4px 0;
  cursor: pointer;

  .priority-icon {
    color: ${({ hexCode }) => hexCode};
    font-size: 20px;
  }

  .priority-name {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primaryTextColor};
  }
`;
