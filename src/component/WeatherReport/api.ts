import { openWeatherKEY } from './constants';

export const getWeatherInfo = async ({
  lat,
  long,
}: {
  lat: number;
  long: number;
}) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${openWeatherKEY}`
  );

  const data = await response.json();

  return data;
};

export const getPlacename = async ({
  lat,
  long,
}: {
  lat: number;
  long: number;
}) => {
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&limit=2&appid=${openWeatherKEY}`
  );

  const data = await response.json();
  return data;
};
