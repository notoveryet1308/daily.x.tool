import styled from "styled-components";

export const StyledSprintPlanner = styled.div`
  width: 400px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  .info {
    color: ${({ theme }) => theme.colors.primaryTextColor};
    font-size: 16px;
    background: ${({ theme }) => theme.colors.primaryGreyColor};
    padding: 4px 12px;
    border-radius: 4px;
  }
`;
