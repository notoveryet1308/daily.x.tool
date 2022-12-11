import styled, { createGlobalStyle } from 'styled-components';

export const StyledMainWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 64px);
  background-color: ${({ theme }) => theme.colors.primaryBgColor};
  display: flex;
  justify-content: center;
  

  @media (max-width: ${({ theme }) => theme.breakpoints.TABLET}px) {
    min-height: calc(100vh - 87px);
  }

  &::selection {
    color: ${({ theme }) => theme.colors.primaryTextColor};
    background: ${({ theme }) => theme.colors.primaryBgColor};
  }
`;

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ::selection{
    background: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.primaryTextColor};
  }

  body {
    font-family: 'Noto Sans', sans-serif;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: none;
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.scrollbarColor};
    border-radius: 4px;
  }

  h1,h2, h3,h4,h5,h6,div,p{
    margin: 0;
    padding: 0;

    &.ant-typography{
      margin: 0;
      padding: 0;
    }
    

  }

  a {
    margin: 0;
    padding: 0;
    color: inherit;
    &:hover{
      color: inherit;
    }
  }
  pre, code, ul, ol, li {
    margin: 0;
    padding: 0;
  }
`;
