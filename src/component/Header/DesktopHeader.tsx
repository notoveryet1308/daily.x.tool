import React from 'react';
import AppTitle from '../UI/AppTitle';
import ChangeTheme from '../Header/ChangeTheme';
import MainNavigation from '../Header/MainNavigation';

import { navData, authNavData } from './data';
import { StyledAppTitleLink } from './style';

const DesktopHeader = ({
  colorTheme,
  handleColorTheme,
}: {
  colorTheme: string;
  handleColorTheme: () => void;
}) => {
  return (
    <React.Fragment>
      <StyledAppTitleLink to="/">
        <AppTitle />
      </StyledAppTitleLink>
      <MainNavigation className="main-navigation" data={navData} />
      <MainNavigation className="auth-navigation" data={authNavData}>
        <ChangeTheme
          colorTheme={colorTheme}
          handleColorTheme={handleColorTheme}
        />
      </MainNavigation>
    </React.Fragment>
  );
};

export default DesktopHeader;
