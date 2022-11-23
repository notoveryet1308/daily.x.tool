import {
  SATURATION,
  LIGHTNESS_L1,
  LIGHTNESS_L2,
  LIGHTNESS_L3,
} from './constants';

export const whiteThemeColors = {
  //primary color
  primaryColor: '#7C63CF',
  secondaryColor: '#CAC0EC',
  tertiaryColor: '#D8D0F1',

  white: '#fff',
  black: '#000',

  //bgColor
  primaryBgColor: '#F1EEFA',
  secondaryBgColor: '#E4E0F3',
  tertiaryBgColor: '#D7D1EE',

  //text color
  primaryTextColor: '#160D2E',
  secondaryTextColor: '#382778',
  tertiaryTextColor: '#8C7CD0',
  disabledTextColor: '#382777',

  // gradient color
  weatherBg:
    'linear-gradient(90.81deg, rgba(159, 138, 238, 0.38) 29.64%, rgba(0, 80, 91, 0.6) 50.7%)',

  // colors with transparency

  tempBgColor: 'rgba(215, 209, 238, .8)',
  todoItemOverlay: 'rgba(241, 238, 250, .8)',
  underlineColor: 'rgba(202, 192, 236, .4)',

  ruleBreakerColor: '#2690EB',

  // hue
  [SATURATION]: 45,
  [LIGHTNESS_L1]: 88,
  [LIGHTNESS_L2]: 80,
  [LIGHTNESS_L3]: 60,
};

export const darkThemeColors = {
  //primary color
  primaryColor: '#7C63CF',
  secondaryColor: '#CAC0EC',
  tertiaryColor: '#D8D0F1',

  white: '#fff',
  black: '#000',

  //bgColor
  primaryBgColor: '#0E0A1E',
  secondaryBgColor: '#150E2D',
  tertiaryBgColor: '#1C133C',

  //text color
  primaryTextColor: '#F1EFF8',
  secondaryTextColor: '#D8D0EE',
  tertiaryTextColor: '#BCB1E3',
  disabledTextColor: '#382777',

  // gradient color
  weatherBg:
    'linear-gradient(90.81deg, rgba(28, 19, 60, 0.38) 29.64%, rgba(0, 80, 91, 0.6) 50.7%)',

  // colors with transparency

  tempBgColor: 'rgba(28, 19, 60, .8)',
  todoItemOverlay: 'rgba(14, 10, 30, .8)',
  underlineColor: 'rgba(202, 192, 236, .4)',
  ruleBreakerColor: '#2690EB',

  // hue
  [SATURATION]: 45,
  [LIGHTNESS_L1]: 20,
  [LIGHTNESS_L2]: 30,
  [LIGHTNESS_L3]: 50,
};
