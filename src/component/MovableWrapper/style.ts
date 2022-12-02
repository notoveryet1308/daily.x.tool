import styled from 'styled-components';

export const StyledMovableWrapper = styled.div`
  position: relative;

  .move-icon-wrapper {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 40px;
    height: 40px;
    /* border-radius: 10px; */
    /* overflow: hidden; */
  }

  .move-icon {
    color: ${({ theme }) => theme.colors.primaryTextColor};
    font-size: 20px;
    background: ${({ theme }) => theme.colors.primaryBgColor};
  }
`;
