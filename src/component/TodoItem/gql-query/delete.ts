import { gql, useMutation } from "@apollo/client";
import { useTodoCollectionContext } from "../../../Context/TodoCollectionContext";
import { isUserAuthenticated } from "../../../utils";

const DELETE_TODO = gql`
  mutation deleteOneTodo($input: DeleteTodoInput!) {
    deleteTodo(input: $input)
  }
`;

export const useDeleteTodoMutation = (id: string) => {
  const userLogged = isUserAuthenticated();
  const { todoCollectionData, addToTodoCollection } =
    useTodoCollectionContext();
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

  const handleDeleteTodo = () => {
    userLogged
      ? deleteTodoMutation({
          variables: {
            input: {
              id: id,
            },
          },
        })
      : addToTodoCollection(todoCollectionData.filter((d) => d.id !== id));
  };

  return { handleDeleteTodo };
};
