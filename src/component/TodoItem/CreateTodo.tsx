import React, { useCallback, useState } from 'react';
import { Typography } from 'antd';

import { StyledCreateTodo } from './style';
import { Input, TextArea } from '../UI/Input';
import { PrimaryButton } from '../UI/Buton';
import { _debounce } from '../../utils';
import { useCheckRequiredValue } from '../../hooks';

const { Title } = Typography;

const CreateTodo = ({ className }: { className?: string }) => {
  const [todoData, setTodoData] = useState<{
    duration: string;
    description: string;
  }>({ duration: '', description: '' });

  const [showCommand, setShowCommand] = useState<boolean>(false);
  const [allowAction] = useCheckRequiredValue([todoData.description]);

  const todoDataHandler = useCallback(
    _debounce({
      func: (data: { duration?: string; description?: string }) => {
        const duration = data['duration'] || '';
        const description = data['description'] || '';
        setTodoData({ duration, description });
      },
      delay: 500,
    }),
    [todoData]
  );

  const showCommandHandler = ({ command }: { command: string }) => {
    if (command === '/') {
      setShowCommand(true);
    } else {
      setShowCommand(false);
    }
  };

  return (
    <StyledCreateTodo className={className}>
      <Title className='create-todo-title'>Create item</Title>
      <Input
        name='command'
        placeholder='Type "/" for commands'
        value=''
        onChange={showCommandHandler}
        type='text'
        bordered={false}
        disabled
      />
      <Input
        name='duration'
        placeholder='Enter task duration (number)'
        value={todoData.duration}
        onChange={todoDataHandler}
        type='number'
        label='duration'
        optional
      />
      <TextArea
        name='description'
        placeholder='Enter task description'
        value={todoData.description}
        onChange={todoDataHandler}
        label='description'
        minHeight={100}
      />
      <PrimaryButton label='Add' disabled={!allowAction} type='submit' />
    </StyledCreateTodo>
  );
};

export default CreateTodo;
