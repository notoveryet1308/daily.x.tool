import styled from 'styled-components';

export const StyledLoader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  .ant-spin-dot-item {
    background-color: ${({ theme }) => theme.colors.primaryColor};
  }
`;
