import { gql, useMutation } from '@apollo/client';
import { nanoid } from 'nanoid';
import { GET_ALL_TODO } from '../../../pages/Home';

const CREATE_TODO_GQL = gql`
  mutation CreateNewTodo($newTodo: CreateTodoInput!) {
    createTodo(input: $newTodo) {
      id
      duration
      description
      isCompleted
      createdOn
    }
  }
`;

export const useCreateTodoMutation = () => {
  const [createTodo] = useMutation(CREATE_TODO_GQL, {
    update(cache, { data: { createTodo } }) {
      const existingTodo = cache.readQuery({
        query: GET_ALL_TODO,
      });
      cache.writeQuery({
        query: GET_ALL_TODO,
        data: {
          getTodo: [...existingTodo?.getTodo, createTodo],
        },
      });
    },
  });

  const handleNewTodoCreation = (todoData: {
    duration?: number;
    description: string;
  }) => {
    const todoID = nanoid();
    const createdOn = Date.now();
    createTodo({
      variables: {
        newTodo: {
          id: todoID,
          description: todoData.description,
          duration: todoData.duration,
          isCompleted: false,
          createdOn,
        },
      },
      optimisticResponse: {
        __typename: 'Mutation',
        createTodo: {
          id: todoID,
          description: todoData.description,
          duration: todoData.duration,
          isCompleted: false,
          createdOn,
          __typename: 'Todo',
        },
      },
    });
  };

  return { handleNewTodoCreation, createTodo };
};
