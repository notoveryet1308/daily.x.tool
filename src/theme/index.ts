import { whiteThemeColors as main, darkThemeColors as dark } from './colors';
import { breakpoints } from './breakpoint';
import mixins from './mixins';

const theme = {
  colors: {
    main,
    dark,
  },
  breakpoints,
  fontSize: {
    small: '12px',
    medium: '14px',
    large: '16px',
    extraLarge: '20px',
    extraLarge2: '28px',
  },

  space: {
    tiny: '2px',
    xSmall: '4px',
    small: '8px',
    small2: '12px',
    medium: '16px',
    large: '32px',
  },
  mixins,
};

export default theme;
