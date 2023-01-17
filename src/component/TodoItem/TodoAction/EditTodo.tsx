import { useEffect } from "react";
import { TodoCollectionType } from "../../../Context/types";
import { PrimaryButton, SecondaryButton } from "../../UI/Button";
import { useUpdateTodoMutation } from "../gql-query/update";
import { useCreateTodoDataHandler } from "../hooks";
import TodoAction from "./ActionCommon";

import { StyledEditTodo } from "./style";

const EditTodo = ({
  todoData,
  onCancel,
}: {
  todoData: TodoCollectionType;
  onCancel: Function;
}) => {
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
        duration: todoEditData.duration.value,
        description: todoEditData.description.value,
        createdOn: todoData.createdOn,
        isCompleted: todoData.isCompleted,
      });
      onCancel();
    } 
  };

  return (
    <StyledEditTodo>
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
        hideSubmitAction
        className="edit-todo-common-field"
      />
      <div className="edit-todo-footer">
        <SecondaryButton onClick={onCancel} label="Cancel" />
        <PrimaryButton
          onClick={onSubmitHandler}
          disabled={!allowAction}
          label={"Update"}
        />
      </div>
    </StyledEditTodo>
  );
};

export default EditTodo;
