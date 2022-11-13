import React from 'react';

import { localLatitude, localLongitude } from './constants';

const ShowWeather = ({ showWeatherDeatil, setShowWeatherDetail }) => {
  const handleClick = () => {
    setShowWeatherDetail(true);
    if (!localLatitude && !localLongitude) {
      return;
    }

    localStorage.setItem('show-weather-details', 'true');
  };
  return (
    <div className="show-weather-detail-btn" onClick={handleClick}>
      {!showWeatherDeatil
        ? 'Show Weather Deatils'
        : !localLatitude && !localLongitude
        ? 'Grant Location Permisson'
        : 'Loading...'}
    </div>
  );
};

export default ShowWeather;
