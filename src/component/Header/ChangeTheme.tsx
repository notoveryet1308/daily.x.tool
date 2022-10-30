import React from 'react';

import { SunDim, Moon } from 'phosphor-react';
import { StyledChnageTheme } from './style';

const ChangeTheme = ({
  className,
  colorTheme,
  handleColorTheme,
}: {
  className?: string;
  colorTheme: string;
  handleColorTheme: () => void;
}) => {
  return (
    <StyledChnageTheme className={className} onClick={handleColorTheme}>
      {colorTheme === 'main' ? (
        <Moon className="ph-icon icon-dark" />
      ) : (
        <SunDim className="ph-icon icon-light" />
      )}
    </StyledChnageTheme>
  );
};

export default ChangeTheme;
