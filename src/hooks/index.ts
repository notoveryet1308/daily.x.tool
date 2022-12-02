import { useState, useEffect } from 'react';

export const useScreenWidth = (): [number] => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  window.addEventListener('resize', () => {
    setScreenWidth(window.innerWidth);
  });

  return [screenWidth];
};

export const useCheckRequiredValue = (values: (string | number)[]) => {
  const [allowAction, setAllowAction] = useState<boolean>(false);

  useEffect(() => {
    values.forEach((val) => {
      if (!val) {
        setAllowAction(false);
      } else {
        setAllowAction(true);
      }
    });
  }, [...values]);

  return [allowAction];
};
