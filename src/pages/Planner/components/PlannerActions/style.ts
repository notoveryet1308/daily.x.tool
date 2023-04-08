import styled from "styled-components";

export const StyledPlannerActions = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;

  .all-work-active-state {
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${({ theme }) => theme.colors.primaryTextColor};
    padding: 4px 8px;
    background-color: ${({ theme }) => theme.colors.primaryGreyColor};
    border-radius: 4px;

    .target-icon {
      color: ${({ theme }) => theme.colors.secondaryTextColor};
      font-size: 20px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.TABLET}px) {
      .my-work-label {
        display: none;
      }
    }
  }

  .planner-dropdown-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;

    .dd-shell {
      width: 132px;
    }
    .dd-content {
      width: 300px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.LARGE_MOBILE}px) {qw
      .dd-content {
        display: none;
      }
    }
  }
`;

export const StyledCreateAndDraftAction = styled.div`
  &.create-and-draft-wrapper {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .create-ticket-btn {
      background: ${({ theme }) => theme.colors.plannerCreateColor};
      padding: 4px 16px;
    }

    .draft-nav-btn {
      color: ${({ theme }) => theme.colors.secondaryTextColor};
      font-size: 14px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.LARGE_MOBILE}px) {
      bottom: 0;
      left: 0;
      padding: 8px 20px;
      position: fixed;
      flex-direction: row-reverse;
      width: 100%;
      border-top: 1px solid ${({ theme }) => theme.colors.primaryGreyColor};
      
    }
  }
`;
