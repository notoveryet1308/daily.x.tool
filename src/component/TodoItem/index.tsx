import { useState } from 'react';
import { Square, CheckSquare, PencilLine, Trash } from 'phosphor-react';

import { StyledTodoItem } from './style';
import { RichTextReadOnly } from '../UI/RichTextEditor';
import { getDateFormat } from './utils';
import { useDeleteTodoMutation } from './gql-query/delete';
import { useUpdateTodoMutation } from './gql-query/update';

import Modal from '../UI/Modal';
import CreateTodo from './CreateTodo';

const TodoItem = ({
  id,
  description,
  isCompleted,
  createdOn,
  duration,
}: {
  id: string;
  description: string;
  isCompleted: boolean;
  createdOn: number;
  duration?: number;
}) => {
  const [editTodo, setEditTodo] = useState<boolean>(false);

  const { handleCompleteAction } = useUpdateTodoMutation();

  const { handleDeleteTodo } = useDeleteTodoMutation(id);

  const toggleEditModal = () => {
    setEditTodo(!editTodo);
  };

  const creationActivity = getDateFormat(createdOn);

  return (
    <StyledTodoItem completed={isCompleted} duration={!!duration}>
      {!!duration && !isCompleted && (
        <div className='todo-duration'>
          To be completed in {duration} {duration > 1 ? 'days' : 'day'}
        </div>
      )}
      <div className='todo-icon-wrapper'>
        {isCompleted ? (
          <CheckSquare
            className='ph-icon check-square'
            onClick={() =>
              handleCompleteAction({
                id,
                description,
                duration,
                isCompleted,
                createdOn,
              })
            }
            weight='fill'
          />
        ) : (
          <Square
            className='ph-icon square'
            onClick={() =>
              handleCompleteAction({
                id,
                description,
                duration,
                isCompleted,
                createdOn,
              })
            }
            weight='bold'
          />
        )}
      </div>
      <div className='todo-description-wrapper'>
        <RichTextReadOnly value={JSON.parse(description)} />
        <span className='todo-creation-date'>{creationActivity}</span>
        <div className='action-btn-wrapper'>
          <PencilLine className='edit-icon ph-icon' onClick={toggleEditModal} />
          <Trash className='trash-icon ph-icon' onClick={handleDeleteTodo} />
        </div>
      </div>
      <Modal
        showFooter={false}
        open={editTodo}
        onClose={toggleEditModal}
        title='Edit todo'
        align='center'
      >
        <CreateTodo
          toggleEditModal={toggleEditModal}
          isEditMode
          todoEditData={{ id, description, isCompleted, createdOn, duration }}
        />
      </Modal>
    </StyledTodoItem>
  );
};

export default TodoItem;
