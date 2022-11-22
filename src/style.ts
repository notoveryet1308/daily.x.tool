import styled from 'styled-components';

export const StyledMainWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 64px);
  background-color: ${({ theme }) => theme.colors.primaryBgColor};
  display: flex;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.TABLET}px) {
    min-height: calc(100vh - 84.5px);
  }
`;
