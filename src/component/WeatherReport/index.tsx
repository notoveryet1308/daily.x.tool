import React, { useEffect, useState } from 'react';

import WatchTime from '../WatchTime';
import { getPlacename, getWeatherInfo } from './api';
import { getLocationCoords } from './hooks';
import ShowWeather from './ShowWeather';
import { StyledWeatherReport } from './style';
import TempLocation from './TempLocation';
import { bannerImgWeather, weatherDummyData } from './constants';
import { weatherDataType } from './types';
import DateBanner from '../UI/DateBanner';

const localShowWeatherData =
  !!localStorage.getItem('show-weather-details') || false;

const WeatherReport = () => {
  const [showWeatherDetail, setShowWeatherDetail] =
    useState<boolean>(localShowWeatherData);
  const [latitude, longitude] = getLocationCoords({ showWeatherDetail });
  const [weatherData, setWeatherData] =
    useState<weatherDataType>(weatherDummyData);

  useEffect(() => {
    if (showWeatherDetail && latitude && longitude) {
      getWeatherInfo({ lat: latitude, long: longitude }).then((data) => {
        setWeatherData({ ...data, dataFetched: true });
      });
    }
  }, [showWeatherDetail, latitude, longitude]);

  return (
    <StyledWeatherReport
      showWeatherDetail={!!(showWeatherDetail && weatherData.dataFetched)}
    >
      <img
        className='banner-img'
        src={bannerImgWeather}
        // loading='lazy'
        alt='weather banner img'
      />
      <div className='overlay'></div>
      {!weatherData.dataFetched || !showWeatherDetail ? (
        <ShowWeather
          showWeatherDetail={showWeatherDetail}
          setShowWeatherDetail={setShowWeatherDetail}
        />
      ) : null}
      <div className='home-date-banner'>
        <DateBanner />
      </div>
      <div className='weather-content-wrapper'>
        <div className='weather-content'>
          {weatherData.dataFetched && showWeatherDetail && (
            <TempLocation
              temperature={weatherData?.main.temp}
              location={weatherData.name}
            />
          )}
          <WatchTime />
          {showWeatherDetail && weatherData.dataFetched && (
            <div className='weather-sky'>
              <img
                className='weather-sky-img'
                src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`}
                loading='lazy'
                alt='sky report'
              />
              <span className='weather-sky-description'>
                {weatherData?.weather[0].description}
              </span>
            </div>
          )}
        </div>
      </div>
    </StyledWeatherReport>
  );
};

export default WeatherReport;
