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
  position: relative;
  display: flex;
  column-gap: 20px;
  flex: 1;
  align-items: flex-start;
  padding-bottom: 40px;

  .single-ticket-left {
    display: flex;
    flex-direction: column;
    flex: 1;
    row-gap: 30px;
    height: 100%;
  }

  .single-ticket-right {
    position: sticky;
    top: 20px;
    right: 0;
    min-width: 300px;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.LARGE_MOBILE}px) {

    padding-bottom: 100px;
    .single-ticket-right {
      display: none;
    }

    .single-ticket-left {
      height: 90%;
      
    }
  }
`;
