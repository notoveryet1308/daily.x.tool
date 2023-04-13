import styled from "styled-components";
import Textarea from "../../../../../component/UI/Input/TextArea";

export const StyledTicketSummaryInput = styled(Textarea)`
  padding: 12px;
  border: 1px solid transparent;
  background-color: ${({ theme }) => theme.colors.secondaryBgColor};

  &&& .ticket-summary-input {
  }
`;

export const StyledCreateTicket = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  position: relative;

  .ticket-creation-action {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primaryGreyColor};
    margin-bottom: 12px;

    .action-btn-wrapper {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      align-items: center;
      gap: 12px;
    }

    &.in-mobile {
      padding: 12px;
    }
  }

  .ticket-input-field {
    display: flex;
    flex: 1;
    gap: 24px;

    .input-section-left {
      display: flex;
      flex-direction: column;
      gap: 16px;
      flex: 1;
    }

    .input-section-right {
      display: flex;
      flex-direction: column;
      width: 300px;
    }
  }

  .set-property-footer {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 8px;
    align-items: center;
    color: ${({ theme }) => theme.colors.primaryTextColor};
    cursor: pointer;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.primaryGreyColor};
    border-top: 1px solid ${({ theme }) => theme.colors.primaryColor};

    .list-icon {
      color: ${({ theme }) => theme.colors.secondaryTextColor};
      font-size: 16px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.LARGE_MOBILE}px) {
    && .input-section-right {
      display: none;
    }

    .ant-divider {
      display: none;
    }
  }
`;

export const StyledCreateTicketStepOneView = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primaryGreyColor};
  padding: 12px 16px;
  width: 100%;
  border-radius: 4px;

  .project-data-wrapper {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.secondaryTextColor};
    font-size: 12px;
    gap: 8px;

    .project-data-value {
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
    margin-left: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.LARGE_MOBILE}px) {
    gap: 16px;

    .project-data-wrapper {
      flex-wrap: wrap;
      gap: 4px;

      .project-data-value {
        margin: 0;
      }
    }

    .step-one-view-divider {
      display: none;
    }
  }
`;

export const StyledSummaryView = styled.div``;

export const StyledCreateStepTwo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px; ;
`;

export const StyledTicketProperty = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.LARGE_MOBILE}px) {
    padding: 24px;
  }
`;
