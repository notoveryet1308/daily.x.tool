import styled from 'styled-components';

export const StyledToastWrapper = styled.div`
  max-width: 800px;
  width: 90%;
  margin: 0 auto;
  margin-top: 90px;
  position: absolute;
  padding: 4px 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .toast-content{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
  }

  &.toast-error{
    background-color: ${({theme})=> theme.colors.errorLight};
    color: ${({theme})=> theme.colors.errorDark};
  }

  &.toast-warning{
    background-color: ${({theme})=> theme.colors.warningLight};
    color: ${({theme})=> theme.colors.warningDark};
  }

  &.toast-success{
    background-color: ${({theme})=> theme.colors.successLight};
    color: ${({theme})=> theme.colors.successDark};
  }


`