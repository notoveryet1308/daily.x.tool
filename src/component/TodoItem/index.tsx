import { useState } from 'react';

import { Square, CheckSquare} from 'phosphor-react';
import { StyledTodoItem } from './style';
import { RichTextReadOnly } from '../UI/RichTextEditor';
import { getDateFormat } from './utils';

const TodoItem = ({
  id,
  description,
  isCompleted,
  createdOn,
  duration,
}: {
  description: string;
  isCompleted: boolean;
  createdOn: number;
  duration?: number;
}) => {
  const [completed, setCompleted] = useState<boolean>(isCompleted);
  const handleCompleteAction = () => {
    setCompleted(!completed);
  };

  const creationActivity = getDateFormat(createdOn);

  return (
    <StyledTodoItem completed={completed}>
      {!!duration && !isCompleted && (
        <div className='todo-duration'>
          To be completed in {duration} {duration > 1 ? 'days' : 'day'}
        </div>
      )}
      <div className='todo-icon-wrapper'>
        {completed ? (
          <CheckSquare
            className='ph-icon check-square'
            onClick={handleCompleteAction}
            weight='fill'
          />
        ) : (
          <Square
            className='ph-icon square'
            onClick={handleCompleteAction}
            weight='bold'
          />
        )}
      </div>
      <div className='todo-description-wrapper'>
        <RichTextReadOnly value={JSON.parse(description)} />
        <span className='todo-creation-date'>{creationActivity}</span>
      </div>
    </StyledTodoItem>
  );
};

export default TodoItem;
