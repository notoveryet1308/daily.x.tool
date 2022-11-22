import React from 'react';

import { localLatitude, localLongitude } from './constants';

const ShowWeather = ({
  showWeatherDetail,
  setShowWeatherDetail,
}: {
  showWeatherDetail: boolean;
  setShowWeatherDetail: Function;
}) => {
  const handleClick = () => {
    setShowWeatherDetail(true);
    if (!localLatitude && !localLongitude) {
      return;
    }

    localStorage.setItem('show-weather-details', 'true');
  };
  return (
    <div className='show-weather-detail-btn' onClick={handleClick}>
      {!showWeatherDetail
        ? 'Show Weather Details'
        : !localLatitude && !localLongitude
        ? 'Grant Location Permission'
        : 'Loading...'}
    </div>
  );
};

export default ShowWeather;
