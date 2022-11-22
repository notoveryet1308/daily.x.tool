import React from 'react';

import { SunDim, Moon } from 'phosphor-react';
import { StyledChangeTheme } from './style';

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
    <StyledChangeTheme className={className} onClick={handleColorTheme}>
      {colorTheme === 'main' ? (
        <Moon className='ph-icon icon-dark' />
      ) : (
        <SunDim className='ph-icon icon-light' />
      )}
    </StyledChangeTheme>
  );
};

export default ChangeTheme;
