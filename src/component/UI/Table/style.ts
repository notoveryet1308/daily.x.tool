import styled from "styled-components";

export const StyledTable = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  color: ${({ theme }) => theme.colors.primaryTextColor};
  background-color: ${({ theme }) => theme.colors.secondaryBgColor};
`;
