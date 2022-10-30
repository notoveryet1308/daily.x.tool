import React from 'react';
import { useScrenWidth } from '../../../hooks';
import { breakpoints } from '../../../theme/breakpoint';
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
  const [screenWidth] = useScrenWidth();

  return (
    <StyledHeaderWrapper>
      <div className="header-content">
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
