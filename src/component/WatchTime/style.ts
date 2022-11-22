import styled from 'styled-components';

export const StyledWatchTime = styled.div`
  height: 60px;
  background-color: ${({ theme }) => theme.colors.tempBgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  border-radius: 40px;

  .time-data {
    padding: 0 12px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .time-value {
      font-weight: 400;
      font-size: ${({ theme }) => theme.fontSize.extraLarge2};
      line-height: 20px;
      color: ${({ theme }) => theme.colors.primaryTextColor};
    }

    .time-info {
      font-size: ${({ theme }) => theme.fontSize.medium};
      color: ${({ theme }) => theme.colors.secondaryTextColor};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.LARGE_MOBILE}px) {
    .time-data {
      .time-value {
        font-size: ${({ theme }) => theme.fontSize.extraLarge};
      }
      .time-info {
        font-size:  ${({ theme }) => theme.fontSize.small};;
      }
    }
  }
`;
