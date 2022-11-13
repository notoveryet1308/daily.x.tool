import styled from 'styled-components';

export const StyledMainWrapper = styled.div`

  position: relative;
  width: 100%;
  min-height: calc(100vh - 65px);
  background-color: ${({ theme }) => theme.colors.tertiaryBgColor};
  display: flex;
  justify-content: center;
`;
