import styled, { createGlobalStyle } from "styled-components";

export const StyledMainWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  max-height: calc(100vh - 66px);
  background-color: ${({ theme }) => theme.colors.primaryBgColor};
  display: flex;
  justify-content: center;
  overflow: hidden;
  overflow-y: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.TABLET}px) {
    max-height: calc(100vh - 92px);
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
    background-color: ${({ theme }) => theme.colors.primaryBgColor};
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
  
   @media (max-width: ${({ theme }) => theme.breakpoints.LARGE_MOBILE}px){
       ::-webkit-scrollbar {
         width: 4px;
      }
    
    ::-webkit-scrollbar-track {
      background: none;
      border-radius: 2px;
    }
    
    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.scrollbarColor};
      border-radius: 2px;
      }
   }
  
`;
