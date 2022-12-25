import styled from 'styled-components';

export const StyledSocialMedia = styled.div`
  display: flex;
  gap: 12px;

  .social-link {
    background-color: ${({ theme }) => theme.colors.primaryColor};
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    .ph-icon {
      color: ${({ theme }) => theme.colors.primaryTextColor};
      font-size: 24px;
    }
  }
`;
