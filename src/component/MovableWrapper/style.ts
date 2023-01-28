import styled from 'styled-components';

export const StyledMovableWrapper = styled.div`
  position: absolute;

  .move-icon-wrapper {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 40px;
    height: 40px;
  }

  .move-icon {
    color: ${({ theme }) => theme.colors.primaryTextColor};
    font-size: 20px;
    background: ${({ theme }) => theme.colors.primaryBgColor};
  }
`;
