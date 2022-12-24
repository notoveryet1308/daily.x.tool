import { Typography } from 'antd';

import { StyledCreateTodo } from './style';
import { Input } from '../UI/Input';
import { PrimaryButton } from '../UI/Button';
import { ScrollInView, _debounce } from '../../utils';

import RichTextInput from '../UI/RichTextEditor';
import { useCreateTodoDataHandler } from './hooks';
import { useCreateTodoMutation } from './gql-query/create';
import { useUpdateTodoMutation } from './gql-query/update';

import { TodoCollectionType } from '../../Context/types';
import { useEffect } from 'react';

const { Title } = Typography;

const CreateTodo = ({
  className,
  viewContainerID,
  todoEditData,
  isEditMode,
  toggleEditModal,
}: {
  className?: string;
  viewContainerID?: string;
  todoEditData?: TodoCollectionType;
  isEditMode?: boolean;
  toggleEditModal?: Function;
}) => {
  const { handleNewTodoCreation } = useCreateTodoMutation();
  const { handleTodoUpdate } = useUpdateTodoMutation();

  const {
    todoData,
    dispatch,
    todoDataHandler,
    showCommandHandler,
    allowAction,
  } = useCreateTodoDataHandler({ isEditMode: !!isEditMode });

  useEffect(() => {
    if (isEditMode && todoEditData) {
      todoDataHandler({
        description: todoEditData.description,
        duration: todoEditData.duration?.toString(),
      });
    }
  }, [isEditMode]);
  return (
    <StyledCreateTodo className={className}>
      <Title className='create-todo-title'>Create item</Title>
      <Input
        optional
        type='number'
        name='duration'
        label='duration'
        onChange={todoDataHandler}
        className='create-todo-duration'
        value={`${todoData.duration || todoEditData?.duration || ''}`}
        placeholder='Enter task duration (number)'
      />

      <RichTextInput
        name='description'
        onChange={(v) => {
          console.log({ v });

          todoDataHandler(v);
        }}
        placeholder='Enter description'
        value={
          isEditMode &&
          todoEditData?.description &&
          JSON.parse(todoEditData.description)
        }
        clearEditor={!isEditMode && allowAction && !todoData.description}
        minHeight={150}
      />
      <PrimaryButton
        label={isEditMode ? 'Update' : 'Add'}
        type='submit'
        disabled={!allowAction}
        className='create-todo-button'
        onClick={() => {
          if (!isEditMode && allowAction) {
            handleNewTodoCreation({
              duration: todoData.duration,
              description: todoData.description,
            });
            dispatch({ type: 'reset', payload: '' });
            viewContainerID && setTimeout(() => {
              ScrollInView(viewContainerID, 'end');
            }, 0);;
          }

          if (isEditMode && allowAction && todoEditData && toggleEditModal) {
            handleTodoUpdate({
              id: todoEditData?.id,
              description: todoData.description,
              duration: todoData.duration,
              isCompleted: todoEditData.isCompleted,
              createdOn: todoEditData.createdOn,
            });
            toggleEditModal();
          }
        }}
      />
    </StyledCreateTodo>
  );
};

export default CreateTodo;
