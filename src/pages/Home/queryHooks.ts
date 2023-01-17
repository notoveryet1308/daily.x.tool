import { useQuery, gql } from "@apollo/client";
import { isUserAuthenticated } from "../../utils";
import { useTodoCollectionContext } from "../../Context/TodoCollectionContext";

export const GET_ALL_TODO = gql`
  query getAllTodo {
    getTodo {
      id
      duration
      description
      createdOn
      isCompleted
    }
  }
`;

export const useGetTodoData = () => {
  const isLogged = isUserAuthenticated();
  const { todoCollectionData } = useTodoCollectionContext();
  const allTodoQuery = useQuery(GET_ALL_TODO);

  return { userLogged: isLogged, todoCollectionData, allTodoQuery };
};
