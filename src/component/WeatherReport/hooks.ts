import { useState } from 'react';
import { localLatitude, localLongitude } from './constants';

export const getLocationCoords = ({
  showWeatherDetail,
}: {
  showWeatherDetail: boolean;
}): [number, number] => {
  const [coords, setCoords] = useState<{ latitude: number; longitude: number }>(
    { latitude: localLatitude || 0, longitude: localLongitude || 0 }
  );

  !localLatitude &&
    !localLongitude! &&
    showWeatherDetail &&
    navigator.geolocation.getCurrentPosition((position) => {
      setCoords({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });

      localStorage.setItem('Llatitude', `${position.coords.latitude}`);
      localStorage.setItem('Llongitide', `${position.coords.longitude}`);
    });

  return [coords.latitude, coords.longitude];
};
