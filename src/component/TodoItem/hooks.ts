import { useCallback, useReducer } from 'react';

import { _debounce } from '../../utils';
import { useCheckRequiredValue } from '../../hooks';

import { reducer, initialValue } from './utils';

export const useCreateTodoDataHandler = ({
  isEditMode = false,
}: {
  isEditMode: boolean;
}) => {
  const [todoData, dispatch] = useReducer(reducer, initialValue);
  const [allowAction] = !isEditMode
    ? useCheckRequiredValue({
        values: [todoData.description],
        type: 'and',
      })
    : useCheckRequiredValue({
        values: [todoData.description, todoData.duration],
        type: 'or',
      });

  const todoDataHandler = useCallback(
    (data: { duration?: string; description?: string }) => {
      const duration = data['duration'] || '';
      const description = data['description'] || '';

      if (duration) {
        dispatch({ type: 'set-duration', payload: +duration });
      }
      if (description) {
        dispatch({ type: 'set-description', payload: description });
      }
    },
    []
  );

  const showCommandHandler = ({ command }: { command: string }) => {
    if (command === '/') {
      dispatch({ type: 'show-command', payload: true });
    } else {
      dispatch({ type: 'show-command', payload: false });
    }
  };

  return {
    todoData,
    dispatch,
    todoDataHandler,
    showCommandHandler,
    allowAction,
  };
};
