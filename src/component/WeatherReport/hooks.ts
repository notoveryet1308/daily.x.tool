import { useState } from 'react';
import { localLatitude, localLongitude } from './constants';

export const getLocationCoords = ({
  showWeatherDeatil,
}: {
  showWeatherDeatil: boolean;
}): [number, number] => {
  const [coords, setCoords] = useState<{ latitide: number; longitude: number }>(
    { latitide: localLatitude || 0, longitude: localLongitude || 0 }
  );

  !localLatitude &&
    !localLongitude! &&
    showWeatherDeatil &&
    navigator.geolocation.getCurrentPosition((position) => {
      setCoords({
        latitide: position.coords.latitude,
        longitude: position.coords.longitude,
      });

      localStorage.setItem('Llatitide', `${position.coords.latitude}`);
      localStorage.setItem('Llongitide', `${position.coords.longitude}`);
    });

  return [coords.latitide, coords.latitide];
};
