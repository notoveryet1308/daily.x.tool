import { Typography } from "antd";

import { StyledCreateTodo } from "../style";
import { Input } from "../../UI/Input";
import { PrimaryButton } from "../../UI/Button";

import RichTextInput from "../../UI/RichTextEditor";
import { CreateTodoValueType } from "../types";

const { Title } = Typography;

const TodoActionCommon = ({
  className,
  todoData,
  onChangeHandler,
  allowAction,
  actionLabel,
  onSubmit,
  hideSubmitAction = false,
}: {
  className?: string;
  todoData: CreateTodoValueType;
  onChangeHandler: Function;
  allowAction: boolean;
  actionLabel: string;
  onSubmit: Function;
  hideSubmitAction?: boolean;
}) => {
  const { duration, description } = todoData;
  return (
    <StyledCreateTodo className={className}>
      <Title className="create-todo-title">Create item</Title>
      <Input
        optional
        type="number"
        name="duration"
        label="duration"
        onChangeHandler={onChangeHandler}
        className="create-todo-duration"
        value={duration.isPresent ? duration.value?.toString() : ""}
        placeholder="Enter task duration (number)"
      />

      <RichTextInput
        name="description"
        onChange={onChangeHandler}
        autoFocus={false}
        placeholder="Enter description"
        value={description.value}
        clearEditor={allowAction && !description.value}
        minHeight={150}
        errorMessage={
          description["isPresent"] !== null && !description["isPresent"]
            ? description.errorMessage
            : ""
        }
      />
      {!hideSubmitAction && (
        <PrimaryButton
          label={actionLabel}
          type="submit"
          disabled={!allowAction}
          className="create-todo-button"
          onClick={onSubmit}
        />
      )}
    </StyledCreateTodo>
  );
};

export default TodoActionCommon;
