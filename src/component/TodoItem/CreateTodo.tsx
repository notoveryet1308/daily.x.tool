import { Typography } from 'antd';
import { nanoid } from 'nanoid';

import { StyledCreateTodo } from './style';
import { Input } from '../UI/Input';
import { PrimaryButton } from '../UI/Button';
import { _debounce, ScrollInView } from '../../utils';

import RichTextInput from '../UI/RichTextEditor';

import { useTodoCollectionContext } from '../../Context/TodoCollectionContext';
import { useCreateTodoDataHandler } from './hooks';

const { Title } = Typography;

const CreateTodo = ({
  className,
  viewContainerID,
}: {
  className?: string;
  viewContainerID: string;
}) => {
  const { addToTodoCollection, todoCollectionData } =
    useTodoCollectionContext();
  const {
    todoData,
    dispatch,
    todoDataHandler,
    showCommandHandler,
    allowAction,
  } = useCreateTodoDataHandler();

  return (
    <StyledCreateTodo className={className}>
      <Title className='create-todo-title'>Create item</Title>
      {/* <Input
        name='command'
        placeholder='Type "/" for commands'
        value=''
        onChange={showCommandHandler}
        type='text'
        bordered={false}
        disabled
        className='create-todo-command'
      /> */}
      <Input
        optional
        type='number'
        name='duration'
        label='duration'
        onChange={todoDataHandler}
        className='create-todo-duration'
        value={`${todoData.duration || ''}`}
        placeholder='Enter task duration (number)'
      />

      <RichTextInput
        name='description'
        onChange={todoDataHandler}
        placeholder='Enter description'
        clearEditor={allowAction && !todoData.description}
        minHeight={150}
      />
      <PrimaryButton
        label='Add'
        type='submit'
        disabled={!allowAction}
        className='create-todo-button'
        onClick={() => {
          allowAction &&
            addToTodoCollection([
              ...todoCollectionData,
              {
                id: nanoid(),
                description: todoData.description,
                duration: todoData.duration,
                isCompleted: false,
                createdOn: Date.now(),
              },
            ]);
          dispatch({ type: 'reset', payload: '' });
          ScrollInView(viewContainerID);
        }}
      />
    </StyledCreateTodo>
  );
};

export default CreateTodo;
