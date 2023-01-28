import styled from 'styled-components';

export const StyledBack = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid ${({ theme }) => theme.colors.secondaryTextColor};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px 0;
  cursor: pointer;

  .ph-arrow-left {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.secondaryTextColor};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primaryTextColor};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.TABLET}px) {
    margin: 0;
  }
`;
