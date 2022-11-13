import styled from 'styled-components';

export const StyledHomePageWrapper = styled.main`
  width: 100%;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;


  .main-content-wrapper{
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0 60px;
  
    @media (max-width:${({ theme }) => theme.breakpoints.LARGE_TABLET}px){
      padding: 0 32px;
    }
  
    @media (max-width:${({ theme }) => theme.breakpoints.MOBILE}px){
      padding: 0 16px;
    }
    
  }

  .main-content{
    width: 100%;
    max-width: ${({ theme }) => theme.breakpoints.DESKTOP}px; 
    display: flex;   
    
    .today-todo{
      flex: 1;
      width: 100%;
      background: pink;
    }
  
    .recent-activities{
      width: 300px;
      background: blue;
  
      @media (max-width: ${({ theme }) => theme.breakpoints.TABLET}px){
        display: none;
      }
    }
  }

  
`;
