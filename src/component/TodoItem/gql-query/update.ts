import { gql, useMutation } from "@apollo/client";
import { useTodoCollectionContext } from "../../../Context/TodoCollectionContext";
import { TodoCollectionType } from "../../../Context/types";
import { GET_ALL_TODO } from "../../../pages/Home/queryHooks";
import { isUserAuthenticated } from "../../../utils";
import TodoActionCommon from "../TodoAction/ActionCommon";

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
  const userLogged = isUserAuthenticated();
  const [mutate] = useMutation(UPDATE_TODO_STATE);
  const { todoCollectionData, addToTodoCollection } =
    useTodoCollectionContext();


  const handleCompleteAction = (todoData: TodoCollectionType) => {
    userLogged
      ? mutate({
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
            __typename: "Mutation",
            updateTodoState: {
              id: todoData.id,
              duration: todoData.duration,
              description: todoData.description,
              createdOn: todoData.createdOn,
              isCompleted: !todoData.isCompleted,
              __typename: "Todo",
            },
          },
        })
      : addToTodoCollection(
          todoCollectionData.map((d) => {
            if (todoData.id === d.id) {
              return { ...todoData, isCompleted: !todoData.isCompleted };
            }
            return d;
          })
        );
  };

  const handleTodoUpdate = (todoData: TodoCollectionType) => {
    userLogged
      ? mutate({
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
            __typename: "Mutation",
            updateTodoState: {
              id: todoData.id,
              duration: todoData.duration,
              description: todoData.description,
              createdOn: todoData.createdOn,
              isCompleted: todoData.isCompleted,
              __typename: "Todo",
            },
          },
        })
      : addToTodoCollection(
          todoCollectionData.map((d) => {
            if (todoData.id === d.id) {
              return todoData;
            }
            return d;
          })
        );
  };

  return { handleCompleteAction, handleTodoUpdate };
};
