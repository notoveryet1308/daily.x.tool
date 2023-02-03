import { theme } from "antd";
import styled from "styled-components";

export const StyledLoginPageWrapper = styled.main`
  width: 100%;
  position: relative;
  overflow: hidden;
  .main-content {
    position: relative;
    width: 400px;
    background-color: ${({ theme }) => theme.colors.secondaryBgColor};
    border-radius: 8px;
    margin: 0 auto;
    margin-top: 60px;
    z-index: 2;

    .login-title {
      font-size: ${({ theme }) => theme.fontSize.large2};
      padding: 16px 24px;
      color: ${({ theme }) => theme.colors.primaryTextColor};
      text-align: center;
      border-bottom: 1px solid ${({ theme }) => theme.colors.primaryColor};
    }

    .login-filed {
      padding: 24px;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .login-footer {
      padding: 0 24px 24px 24px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 12px;

      .subtext {
        color: ${({ theme }) => theme.colors.secondaryTextColor};
      }

      .create-account {
        color: ${({ theme }) => theme.colors.primaryTextColor};
        .sign-up-link {
          text-decoration: none;
          color: ${({ theme }) => theme.colors.primaryColor};
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.LARGE_MOBILE}px) {
    .main-content {
      width: 90%;
      border-radius: 16px;
    }
  }
`;
