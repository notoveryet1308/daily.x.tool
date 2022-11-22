import React from 'react';

import { breakpoints } from '../../theme/breakpoint';
import { useScreenWidth } from '../../hooks';
import DesktopHeader from '../Header/DesktopHeader';
import MobileHeader from '../Header/MobileHeader';

import { StyledHeaderWrapper } from './style';

const Header = ({
  colorTheme,
  handleColorTheme,
}: {
  colorTheme: string;
  handleColorTheme: () => void;
}) => {
  const [screenWidth] = useScreenWidth();

  return (
    <StyledHeaderWrapper>
      <div className='header-content'>
        {breakpoints.TABLET < screenWidth ? (
          <DesktopHeader
            colorTheme={colorTheme}
            handleColorTheme={handleColorTheme}
          />
        ) : (
          <MobileHeader
            colorTheme={colorTheme}
            handleColorTheme={handleColorTheme}
          />
        )}
      </div>
    </StyledHeaderWrapper>
  );
};

export default Header;
