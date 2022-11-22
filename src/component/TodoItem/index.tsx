import React, { useState } from 'react';
import { Typography } from 'antd';
import { Square, CheckSquare } from 'phosphor-react';
import { StyledTodoItem } from './style';

const { Paragraph } = Typography;

const TodoItem = ({
  description,
  isCompleted,
}: {
  description: string;
  isCompleted: boolean;
}) => {
  const [completed, setCompleted] = useState<boolean>(isCompleted);
  const handleCompleteAction = () => {
    setCompleted(!completed);
  };

  return (
    <StyledTodoItem completed={completed}>
      <div className='todo-icon-wrapper'>
        {completed ? (
          <CheckSquare
            className='ph-icon check-square'
            onClick={handleCompleteAction}
            weight='fill'
          />
        ) : (
          <Square
            className='ph-icon check-square'
            onClick={handleCompleteAction}
          />
        )}
      </div>
      <div className='todo-description-wrapper'>
        <Paragraph className='todo-description-value'>{description}</Paragraph>
      </div>
    </StyledTodoItem>
  );
};

export default TodoItem;
