import styled from "styled-components";

export const StyledTicketPropertyMobileFooter = styled.div`
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
`;

export const StyledTicketProperty = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .unassigned-label {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.secondaryTextColor};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.LARGE_MOBILE}px) {
    padding: 24px;
  }
`;
