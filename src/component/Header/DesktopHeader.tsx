import React from 'react';
import AppTitle from '../UI/AppTitle';
import ChangeTheme from '../Header/ChangeTheme';
import MainNavigation from '../Header/MainNavigation';

import { navData, authNavData } from './data';

const DesktopHeader = ({
  colorTheme,
  handleColorTheme
}: {
  colorTheme: string;
  handleColorTheme: () => void;
}) => {
  return (
    <React.Fragment>
      <AppTitle />
      <MainNavigation className='main-navigation' data={navData} />
      <MainNavigation className='auth-navigation' data={authNavData} type='auth-data'>
        <ChangeTheme
          colorTheme={colorTheme}
          handleColorTheme={handleColorTheme}
        />
      </MainNavigation>
    </React.Fragment>
  );
};

export default DesktopHeader;
