import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import React, { MouseEvent, useEffect, useRef, useState } from 'react';
import { StyledMovableWrapper } from './style';

type Position = {
  xRate: number;
  yRate: number;
};

const MovableWrapper = ({
  children,
  xPos = 0,
  yPos = 0,
  className = '',
}: {
  children: React.ReactNode;
  xPos?: number;
  yPos?: number;
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
            top < innerHeight - (height + 80)
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
