import React from 'react';

import AppTitle from '../UI/AppTitle';
import ChangeTheme from '../Header/ChangeTheme';
import MainNavigation from '../Header/MainNavigation';
import { navData, authNavData } from './data';

import { StyledMobileHeader, StyledAppTitleLink } from './style';

const MobileHeader = ({
  colorTheme,
  handleColorTheme,
}: {
  colorTheme: string;
  handleColorTheme: () => void;
}) => {
  return (
    <StyledMobileHeader>
      <div className='mobile-header-top'>
        <StyledAppTitleLink to='/'>
          <AppTitle />
        </StyledAppTitleLink>
        <MainNavigation data={authNavData}>
          <ChangeTheme
            colorTheme={colorTheme}
            handleColorTheme={handleColorTheme}
          />
        </MainNavigation>
      </div>
      <div className='mobile-header-bottom'>
        <MainNavigation data={navData} />
      </div>
    </StyledMobileHeader>
  );
};
export default MobileHeader;
