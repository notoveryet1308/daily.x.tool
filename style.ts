import styled from 'styled-components';

export const StyledMainWrapper = styled.div`

  position: relative;
  width: 100%;
  min-height: calc(100vh - 65px);
  background-color: ${({ theme }) => theme.colors.tertiaryBgColor};

  @media (max-width:${({ theme }) => theme.breakpoints.TABLET}px){
    padding: 0 32px;
    min-height: calc(100vh - 85px);
  }

  @media (max-width:${({ theme }) => theme.breakpoints.MOBILE}px){
    padding: 0 16px;
  }
`;
