import styled from "styled-components";
import Textarea from "../../../../../component/UI/Input/TextArea";

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
