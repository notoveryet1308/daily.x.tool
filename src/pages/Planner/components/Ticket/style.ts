import styled from "styled-components";

export const StyledCreateTicket = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 16px;
  padding: 24px;
  min-height: 300px;
`;

export const StyledDropdownContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 16px;
  max-height: 300px;
  overflow-y: auto;
  align-items: flex-start;
  gap: 16px;
`;

export const StyledTicket = styled.div``;

export const StyledSingleTicket = styled.div`
  display: flex;
  height: 100%;
  column-gap: 20px;

  .single-ticket-left {
    display: flex;
    flex-direction: column;
    flex: 1;
    row-gap: 20px;
  }

  .single-ticket-right {
    min-width: 300px;
    height: 100%;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    border-left: 1px solid ${({ theme }) => theme.colors.primaryGreyColor};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.LARGE_MOBILE}px) {
    .single-ticket-right {
      display: none;
    }

    .single-ticket-left {
      height: 90%;
    }
  }
`;
