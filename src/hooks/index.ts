import React, { useState } from 'react';

export const useScrenWidth = (): [number] => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  window.addEventListener('resize', () => {
    setScreenWidth(window.innerWidth);
  });

  return [screenWidth];
};
