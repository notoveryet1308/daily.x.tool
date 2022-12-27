import styled from "styled-components";

export const StyledSignupPageWrapper = styled.main`
  width: 100%;
  position: relative;

  .main-content {
    width: 400px;
    background-color: ${({ theme }) => theme.colors.secondaryBgColor};
    border-radius: 8px;
    margin: 0 auto;
    margin-top: 100px;

    .signup-title {
      font-size: ${({ theme }) => theme.fontSize.large2};
      padding: 16px 24px;
      color: ${({ theme }) => theme.colors.primaryTextColor};
      text-align: center;
      border-bottom: 1px solid ${({ theme }) => theme.colors.primaryColor};
    }

    .signup-filed {
      padding: 24px;
      display: flex;
      flex-direction: column;
      gap: 24px;
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
  padding: 24px;
`;


 // @media (max-width: ${({ theme }) => theme.breakpoints.LARGE_MOBILE}px) {
  //   display: flex;
  //   justify-content: flex-end;
  //   .main-content {
  //     width: 100%;
  //     border-radius: 16px;
  //   }
  // }