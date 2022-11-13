import React, { useEffect, useState } from 'react';

import WatchTime from '../WatchTime';
import { getWeatherInfo } from '../WeatherReport/api';
import { getLocationCoords } from '../WeatherReport/hooks';
import ShowWeather from './ShowWeather';
import { StyledWeatherReport } from '../WeatherReport/style';
import TempLocation from '../WeatherReport/TemLocation';
import { bannerImgWeather } from './constants';

const localShowWeatherData =
  !!localStorage.getItem('show-weather-details') || false;

const WeatherReport = () => {
  const [showWeatherDeatil, setShowWeatherDetail] =
    useState<boolean>(localShowWeatherData);
  const [latitude, longitude] = getLocationCoords({ showWeatherDeatil });
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (showWeatherDeatil && latitude && longitude) {
      getWeatherInfo({ lat: latitude, long: longitude }).then((data) => {
        setWeatherData(data);
      });
    }
  }, [showWeatherDeatil, latitude, longitude]);

  return (
    <StyledWeatherReport showWeatherDeatil={showWeatherDeatil && weatherData}>
      <img
        className="banner-img"
        src={bannerImgWeather}
        loading="lazy"
        alt="weather banner img"
      />
      <div className="overlay"></div>
      {!weatherData || !showWeatherDeatil ? (
        <ShowWeather
          showWeatherDeatil={showWeatherDeatil}
          setShowWeatherDetail={setShowWeatherDetail}
        />
      ) : null}
      <div className="weather-content-wrapper">
        <div className="weather-content">
          {weatherData && showWeatherDeatil && (
            <TempLocation temperature={weatherData?.main.temp} />
          )}
          <WatchTime />
          {showWeatherDeatil && weatherData && (
            <div className="weather-sky">
              <img
                className="weather-sky-img"
                src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`}
                loading="lazy"
                alt="sky report"
              />
              <span className="weather-sky-description">
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
