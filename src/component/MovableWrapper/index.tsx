import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import React, { useState } from 'react';
import { StyledMovableWrapper } from './style';


type Position = {
  xRate: number;
  yRate: number;
};

const MovableWrapper = ({
  children,
  xPos = 0,
  yPos = 0,
}: {
  children: React.ReactNode;
  xPos?: number;
  yPos?: number;
}) => {
  const [currentPosition, setCurrentPosition] = useState<Position>({
    xRate: xPos,
    yRate: yPos,
  });

  const onDrag = (e: DraggableEvent, data: DraggableData) => {
    setCurrentPosition({ xRate: data.lastX, yRate: data.lastY });
  };

  return (
    <Draggable
      position={{
        x: currentPosition.xRate,
        y: currentPosition.yRate,
      }}
      onDrag={onDrag}
    >
      <StyledMovableWrapper>{children}</StyledMovableWrapper>
    </Draggable>
  );
};

export default MovableWrapper;
