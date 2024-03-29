
import React, {  useRef,  } from 'react';
import { StyledMovableWrapper } from './style';
import { breakpoints } from '../../theme/breakpoint';

const MovableWrapper = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const onMouseDown = (event: React.PointerEvent) => {
    const element = wrapperRef.current;

    let offset = { x: 0, y: 0 };
    let isMouseDown = false;
    if (element) {
      const { width, height } = element.getBoundingClientRect();
      isMouseDown = true;
      offset.x = event.clientX - element.offsetLeft;
      offset.y = event.clientY - element.offsetTop;

      document.addEventListener('pointerup', () => (isMouseDown = false));

      document.addEventListener('pointermove', (event) => {
        if (isMouseDown) {
          const left = Math.abs(event.clientX - offset.x);
          const top = Math.abs(event.clientY - offset.y);

          const maxLimitWidth = innerWidth >= 1280 ? 1248 : innerWidth - width;

          if (
            left > 0 &&
            left < maxLimitWidth &&
            top > 0 &&
            top < innerHeight - (height + 80) &&
            innerWidth > breakpoints.LARGE_MOBILE
          ) {
            element.style.left = left + 'px';
            element.style.top = top + 'px';
            element.style.bottom = 'unset';
            element.style.transform = 'unset';
          }
        }
      });
    }
  };

  return (
    <StyledMovableWrapper
      className={className}
      onPointerDown={onMouseDown}
      ref={wrapperRef}
    >
      {children}
    </StyledMovableWrapper>
  );
};

export default MovableWrapper;
