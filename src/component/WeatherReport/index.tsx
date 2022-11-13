import React, { useEffect, useState } from 'react';
import WatchTime from '../WatchTime';
import { getWeatherInfo } from '../WeatherReport/api';
import { getLocationCoords } from '../WeatherReport/hooks';
import { StyledWeatherReport } from '../WeatherReport/style';
import TempLocation from '../WeatherReport/TemLocation';
import { bannerImgWeather } from './constants';

const WeatherReport = () => {
  const [showWeatherDeatil, setShowWeatherDetail] = useState<boolean>(false);
  const [latitude, longitude] = getLocationCoords({ showWeatherDeatil });
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (showWeatherDeatil && latitude && longitude) {
      getWeatherInfo({ lat: latitude, long: longitude }).then((data) => {
        console.log(data);
        setWeatherData(data);
      });
    }
  }, [showWeatherDeatil, latitude, longitude]);

  return (
    <StyledWeatherReport showWeatherDeatil={showWeatherDeatil}>
      <img
        className="banner-img"
        src={bannerImgWeather}
        loading="lazy"
        alt="weather banner img"
      />
      <div className="overlay"></div>
      {!showWeatherDeatil ? (
        <div
          className="show-weather-detail-btn"
          onClick={() => setShowWeatherDetail(true)}
        >
          Show Weather Deatils
        </div>
      ) : null}
      <div className="weather-content-wrapper">
        <div className="weather-content">
          {showWeatherDeatil && (
            <TempLocation temperature={weatherData?.main.temp} />
          )}
          <WatchTime />
        </div>
      </div>
    </StyledWeatherReport>
  );
};

export default WeatherReport;
