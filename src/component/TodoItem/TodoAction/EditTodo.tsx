import { TodoCollectionType } from "../../../Context/types";
import { useUpdateTodoMutation } from "../gql-query/update";
import { useCreateTodoDataHandler } from "../hooks";
import TodoAction from "./ActionCommon";

const EditTodo = ({ todoData }: { todoData: TodoCollectionType }) => {
  const {
    allowAction,
    todoData: todoEditData,
    todoDataHandler,
    dispatch,
  } = useCreateTodoDataHandler({ isEditMode: true });
  const { handleTodoUpdate } = useUpdateTodoMutation();

  const onSubmitHandler = () => {
    dispatch({ type: "filed-validation", payload: "" });
    if (allowAction) {
      handleTodoUpdate({
        id: todoData.id,
        duration: todoData.duration,
        description: todoData.description,
        createdOn: todoData.createdOn,
        isCompleted: todoData.isCompleted,
      });
    }
  };

  return (
    <TodoAction
      actionLabel="Update"
      todoData={{
        ...todoEditData,
        description: {
          ...todoEditData.description,
          isPresent: !!todoData.description,
          value: todoData.description,
        },
        duration: {
          ...todoEditData.duration,
          isPresent: !!todoData.duration,
          value: todoData.duration,
        },
      }}
      allowAction={allowAction}
      onChangeHandler={todoDataHandler}
      onSubmit={onSubmitHandler}
    />
  );
};

export default EditTodo;
