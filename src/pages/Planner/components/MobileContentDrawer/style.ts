import styled from "styled-components";

export const StyledDrawerTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  .label {
    color: ${({ theme }) => theme.colors.primaryTextColor};
  }
`;
