import styled from "styled-components";

export const StyledCreateTicket = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledCreateTicketStepOneView = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primaryGreyColor};
  padding: 12px 16px;
  width: 100%;
  height: 42px;
  border-radius: 4px;

  .project-data-wrapper {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.secondaryTextColor};
    font-size: 12px;

    .project-data-value {
      margin-left: 8px;
      color: ${({ theme }) => theme.colors.primaryTextColor};
    }
  }

  .edit-step-one {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
    cursor: pointer;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.tertiaryTextColor};
  }
`;

export const StyledSummaryView = styled.div``;

export const StyledCreateStepTwo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px; ;
`;
