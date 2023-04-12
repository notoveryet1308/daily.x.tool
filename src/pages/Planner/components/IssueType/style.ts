import styled from "styled-components";

export const StyledIssueType = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* padding: 4px 8px; */
  gap: 8px;
  cursor: pointer;

  .issue-type-icon {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primaryTextColor};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .issue-type-label {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.primaryTextColor};
  }
`;
