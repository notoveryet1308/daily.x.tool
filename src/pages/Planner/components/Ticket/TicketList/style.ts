import styled from "styled-components";

export const StyledTicketList = styled.div`
  width: 100%;
  overflow: auto;
  background-color: ${({ theme }) => theme.colors.secondaryBgColor};
  border-radius: 8px;

  .table-body-row {
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryGreyColor};
    }
  }
`;

export const StyledHeaderCell = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 8px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryColor};
`;

export const StyledTableCell = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryGreyColor};
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.secondaryTextColor};

  .ticket-nav-link {
    text-decoration: none;
    padding-bottom: 4px;
    border: 2px solid transparent;

    &:hover {
      border-bottom: 2px solid ${({ theme }) => theme.colors.primaryColor};
    }

    &:visited {
      border-bottom: 2px solid ${({ theme }) => theme.colors.primaryColor};
    }
  }

  .ticket-summary {
    max-width: 300px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .unassigned-ticket {
    color: ${({ theme }) => theme.colors.primaryTextColorReversed};
    background-color: ${({ theme }) => theme.colors.secondaryGreyColor};
    padding: 2px 4px;
    font-size: 10px;
    border-radius: 2px;
  }
`;
