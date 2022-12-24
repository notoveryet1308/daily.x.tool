import { gql, useMutation } from '@apollo/client';
import { TodoCollectionType } from '../../../Context/types';

const UPDATE_TODO_STATE = gql`
  mutation UpdateTodoState($input: CreateTodoInput!) {
    updateTodoState(input: $input) {
      id
      isCompleted
      duration
      description
      createdOn
    }
  }
`;

export const useUpdateTodoMutation = () => {
  const [mutate] = useMutation(UPDATE_TODO_STATE);

  const handleCompleteAction = (todoData: TodoCollectionType) => {
    mutate({
      variables: {
        input: {
          id: todoData.id,
          duration: todoData.duration,
          description: todoData.description,
          createdOn: todoData.createdOn,
          isCompleted: !todoData.isCompleted,
        },
      },
      optimisticResponse: {
        __typename: 'Mutation',
        updateTodoState: {
          id: todoData.id,
          duration: todoData.duration,
          description: todoData.description,
          createdOn: todoData.createdOn,
          isCompleted: !todoData.isCompleted,
          __typename: 'Todo',
        },
      },
    });
  };

  const handleTodoUpdate = (todoData: TodoCollectionType) => {
    mutate({
      variables: {
        input: {
          id: todoData.id,
          duration: todoData.duration,
          description: todoData.description,
          createdOn: todoData.createdOn,
          isCompleted: todoData.isCompleted,
        },
      },
      optimisticResponse: {
        __typename: 'Mutation',
        updateTodoState: {
          id: todoData.id,
          duration: todoData.duration,
          description: todoData.description,
          createdOn: todoData.createdOn,
          isCompleted: todoData.isCompleted,
          __typename: 'Todo',
        },
      },
    });
  };

  return { handleCompleteAction, handleTodoUpdate };
};
