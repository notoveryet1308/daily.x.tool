import { nanoid } from "nanoid";
import { useTodoCollectionContext } from "../../../Context/TodoCollectionContext";
import { useScreenWidth } from "../../../hooks";
import { breakpoints } from "../../../theme/breakpoint";
import { isUserAuthenticated, ScrollInView } from "../../../utils";
import { useCreateTodoMutation } from "../gql-query/create";
import { useCreateTodoDataHandler } from "../hooks";
import TodoActionCommon from "./ActionCommon";

const CreateTodo = ({className, viewContainerID}:{ className: string; viewContainerID: string}) => {
  const [screenWidth] = useScreenWidth()
  const userLogged = isUserAuthenticated();
  const { addToTodoCollection, todoCollectionData } =
    useTodoCollectionContext();
  const { handleNewTodoCreation } = useCreateTodoMutation();

  const { todoData, todoDataHandler, allowAction, dispatch } =
    useCreateTodoDataHandler({
      isEditMode: false,
    });

  const onSubmitHandler = () => {
    dispatch({ type: "filed-validation", payload: "" });

    if (allowAction) {
      userLogged
        ? handleNewTodoCreation({
            duration: todoData.duration.value,
            description: todoData.description.value,
          })
        : addToTodoCollection([
            ...todoCollectionData,
            {
              id: nanoid(),
              duration: todoData.duration.value,
              description: todoData.description.value,
              isCompleted: false,
              createdOn: Date.now(),
            },
          ]);

      dispatch({ type: "reset", payload: "" });
      screenWidth > breakpoints.LARGE_MOBILE && setTimeout(()=>{
        ScrollInView(viewContainerID, 'end')
      },0)
    }
  };

  return (
    <TodoActionCommon
      actionLabel="Create"
      todoData={todoData}
      allowAction={allowAction}
      onChangeHandler={todoDataHandler}
      onSubmit={onSubmitHandler}
      className={className}
    />
  );
};

export default CreateTodo;
