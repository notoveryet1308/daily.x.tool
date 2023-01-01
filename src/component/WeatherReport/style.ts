import styled from 'styled-components';

export const StyledWeatherReport = styled.div<{ showWeatherDetail: boolean }>`
  width: 100%;
  position: relative;
  height: 150px;

  .banner-img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
  }

  .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: ${({ theme }) => theme.colors.weatherBg};
  }

  .home-date-banner {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .show-weather-detail-btn {
    position: absolute;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.colors.secondaryBgColor};
    color: ${({ theme }) => theme.colors.secondaryTextColor};
    padding: 4px 8px;
    cursor: pointer;
    font-size: ${({ theme }) => theme.fontSize.small};
    border-radius: 2px;
  }

  .weather-content-wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 60px;
    display: flex;
    justify-content: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.LARGE_TABLET}px) {
      padding: 16px 32px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.MOBILE}px) {
      padding: 16px 16px;
    }
  }

  .weather-content {
    width: 100%;
    max-width: ${({ theme }) => theme.breakpoints.DESKTOP}px;
    height: 100%;
    display: flex;
    justify-content: ${({ showWeatherDetail }) =>
      showWeatherDetail ? 'space-between' : 'center'};
    align-items: center;

    .weather-sky {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;

      .weather-sky-img {
        background-color: ${({ theme }) => theme.colors.tempBgColor};
        border-radius: 50%;
      }

      .weather-sky-description {
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        background-color: ${({ theme }) => theme.colors.secondaryBgColor};
        color: ${({ theme }) => theme.colors.primaryTextColor};
        text-transform: capitalize;
        padding: 4px 8px;
        white-space: nowrap;
        border-radius: 4px;
        font-size: ${({ theme }) => theme.fontSize.small};
        min-width: 70px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.TABLET}px) {
        display: none;
      }
    }
  }
`;

export const StyledTempLocation = styled.div`
  color: ${({ theme }) => theme.colors.primaryTextColor};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  row-gap: 8px;

  .temp-data {
    background-color: ${({ theme }) => theme.colors.tempBgColor};
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

    .temp-value {
      font-size: ${({ theme }) => theme.fontSize.large};
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primaryTextColor};
    }
  }

  .location-data {
    background-color: ${({ theme }) => theme.colors.secondaryBgColor};
    border-radius: 4px;
    padding: 4px 8px;
    display: flex;
    align-items: center;

    min-width: 80px;
    .location-value {
      font-size: ${({ theme }) => theme.fontSize.small};
      margin-left: 8px;
      font-weight: normal;
      color: ${({ theme }) => theme.colors.primaryTextColor};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.TABLET}px) {
    .temp-data {
      width: 60px;
      height: 55px;
      .temp-value {
        font-size: ${({ theme }) => theme.fontSize.extraLarge};
      }
    }

    .location-data {
      .location-value {
        font-size: ${({ theme }) => theme.fontSize.medium};
      }
    }
  }
`;
