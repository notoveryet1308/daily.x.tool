import { gql, useMutation } from '@apollo/client';

const DELETE_TODO = gql`
  mutation deleteOneTodo($input: DeleteTodoInput!) {
    deleteTodo(input: $input)
  }
`;

export const useDeleteTodoMutation = (id: string) => {
  const [deleteTodoMutation, { data, loading, error }] = useMutation(
    DELETE_TODO,
    {
      update(cache, { data: { deleteTodo } }) {
        cache.modify({
          fields: {
            getTodo(existingTodo = [], { readField }) {},
          },
        });
      },
    }
  );

  // console.log({ deleteData: data, delLoading: loading, delError: error });

  const handleDeleteTodo = () => {
    deleteTodoMutation({
      variables: {
        input: {
          id: id,
        },
      },
    });
  };

  return { handleDeleteTodo };
};
