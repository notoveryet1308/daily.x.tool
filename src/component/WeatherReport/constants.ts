export const openWeatherKEY = 'db84cd0deaf3a606cc092d3bea338648';
export const bannerImgWeather =
  'https://images.unsplash.com/photo-1496450681664-3df85efbd29f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80';

export const kelvinConverter = 273.15;

export const localLatitude = Number(localStorage.getItem('Llatitude'));
export const localLongitude = Number(localStorage.getItem('Llongitide'));

export const weatherDummyData = {
  dataFetched: false,
  weather: [
    {
      id: 0,
      main: '',
      description: '',
      icon: '',
    },
  ],

  main: {
    temp: 0,
  },
  name: '',
};
