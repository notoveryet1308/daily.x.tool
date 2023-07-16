import styled from "styled-components";
import { breakpoints } from "../../../../../theme/breakpoint";

export const StyledTicketList = styled.div`
  width: 100%;
  overflow: auto;
  border-radius: 4px;

  .table-body-row {
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryGreyColor};
    }
  }

  @media (max-width: ${breakpoints.TABLET}px) {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
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
  border-right: 1px solid ${({ theme }) => theme.colors.primaryGreyColor};
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
    max-width: 280px;
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

export const StyledMobileTicketCard = styled.a`
  width: 100%;
  padding: 12px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  background-color: ${({ theme }) => theme.colors.secondaryBgColor};
  border-radius: 4px;

  .mob-ticket-card {
    display: flex;
    column-gap: 8px;
    justify-content: flex-start;
    align-items: center;

    &.ticket-key {
      color: ${({ theme }) => theme.colors.tertiaryGreyColor};
    }
    &.middle-row {
      /* align-items: flex-start; */
    }
    &.bottom-row {
      column-gap: 16px;

      .ticket-unassigned {
        font-size: 12px;
        color: ${({ theme }) => theme.colors.secondaryTextColor};
      }
    }

    .ticket-summary {
      color: ${({ theme }) => theme.colors.primaryTextColor};
      max-width: 100%;
      ${({ theme }) => theme.mixins.truncate({ line: 2 })};
    }
  }
`;
