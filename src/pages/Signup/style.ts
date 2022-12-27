import styled from "styled-components";

export const StyledSignupPageWrapper = styled.main`
  width: 100%;
  position: relative;

  .main-content {
    width: 500px;
    background-color: ${({ theme }) => theme.colors.secondaryBgColor};
    border-radius: 8px;
    margin: 0 auto;
    margin-top: 60px;

    .signup-title {
      font-size: ${({ theme }) => theme.fontSize.large2};
      padding: 16px 24px;
      color: ${({ theme }) => theme.colors.primaryTextColor};
      text-align: center;
      border-bottom: 1px solid ${({ theme }) => theme.colors.primaryColor};
    }

    .signup-validation-error {
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding-top: 4px;
    }

    .signup-footer {
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
`;

export const StyledFormFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  padding: 20px 24px 32px 24px;

  .signup-password-rule {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

export const StyledPasswordRule = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: ${({ theme }) => theme.colors.tertiaryBgColor};
  border: 1px solid ${({ theme }) => theme.colors.primaryColor};
  border-radius: 8px;

  .password-rule {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    color: ${({ theme }) => theme.colors.secondaryTextColor};

    .ph-icon {
      font-size: 20px;
    }

    .checked-circle-icon {
      color: ${({ theme }) => theme.colors.successDark};
    }

    .password-rule-info {
      font-size: ${({ theme }) => theme.fontSize.medium};
    }
    .password-rule-followed {
      color: ${({ theme }) => theme.colors.primaryTextColor};
      font-weight: 600;
    }
  }
`;

// @media (max-width: ${({ theme }) => theme.breakpoints.LARGE_MOBILE}px) {
//   display: flex;
//   justify-content: flex-end;
//   .main-content {
//     width: 100%;
//     border-radius: 16px;
//   }
// }
