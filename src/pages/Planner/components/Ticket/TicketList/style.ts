import styled from "styled-components";

export const StyledTicketList = styled.div`
  width: 100%;
  min-width: 800px;
  overflow: auto;
  /* padding: 0 16px; */
  background-color: ${({ theme }) => theme.colors.secondaryBgColor};
  border-radius: 4px;

  .table-body-row {
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryBgColor};
    }
  }
`;

export const StyledHeaderCell = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 8px 0;
  padding-left: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryColor};
`;

export const StyledTableCell = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 50px;
  padding-left: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryGreyColor};
`;
