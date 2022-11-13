import { useState } from 'react';

export const getLocationCoords = ({
  showWeatherDeatil,
}: {
  showWeatherDeatil: boolean;
}): [number, number] => {
  const [coords, setCoords] = useState<{ latitide: number; longitude: number }>(
    { latitide: 0, longitude: 0 }
  );

  showWeatherDeatil &&
    navigator.geolocation.getCurrentPosition((position) => {
      setCoords({
        latitide: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });

  return [coords.latitide, coords.latitide];
};
