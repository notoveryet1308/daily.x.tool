import React from 'react';
import { StyledDateBanner } from './style';

const DateBanner = () => {
  const date = new Date();
  const dd = date.getDate();
  const mm = new Date(0, date.getMonth(), 0).toLocaleDateString('en', {
    month: 'short',
  });
  const yy = date.getFullYear();

  return (
    <StyledDateBanner>
      {dd}&nbsp;{mm}&nbsp;{yy}
    </StyledDateBanner>
  );
};

export default DateBanner;
