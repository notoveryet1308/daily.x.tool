import styled from "styled-components";

export const StyledToastWrapper = styled.div`
  max-width: 800px;
  width: 90%;
  margin: 0 auto;
  padding: 6px 20px;
  border-radius: 4px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .toast-content {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;

    .toast-message {
      font-size: ${({ theme }) => theme.fontSize.medium};
      line-height: 20px;
    }
  }

  .ph-icon {
    font-size: 20px;
  }
  .close-icon {
    color: ${({ theme }) => theme.colors.black};
    margin-left: 6px;
    cursor: pointer;
  }

  &.toast-full {
    position: absolute;
    top: 48px;
    z-index: 21;
  }

  &.toast-error {
    background-color: ${({ theme }) => theme.colors.errorLight};
    color: ${({ theme }) => theme.colors.errorDark};
  }

  &.toast-warning {
    background-color: ${({ theme }) => theme.colors.warningLight};
    color: ${({ theme }) => theme.colors.warningDark};
  }

  &.toast-success {
    background-color: ${({ theme }) => theme.colors.successLight};
    color: ${({ theme }) => theme.colors.successDark};
  }
`;
