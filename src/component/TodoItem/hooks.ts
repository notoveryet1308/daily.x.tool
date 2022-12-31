import { useCallback, useReducer } from "react";

import { _debounce } from "../../utils";
import { useCheckRequiredValue } from "../../hooks";

import { reducer, initialValue } from "./utils";

export const useCreateTodoDataHandler = ({
  isEditMode = false,
}: {
  isEditMode: boolean;
}) => {
  const [todoData, dispatch] = useReducer(reducer, initialValue);
  const [allowAction] = !isEditMode
    ? useCheckRequiredValue({
        values: [!!todoData.description.value],
        type: "and",
      })
    : useCheckRequiredValue({
        values: [!!todoData.description.value, !!todoData.duration.value],
        type: "or",
      });

  const todoDataHandler = useCallback(
    (data: {
      duration: string | boolean;
      description: string;
      field: string;
    }) => {
      const duration = data["duration"];
      const description = data["description"];
    

      if (data["field"] === "duration") {
        dispatch({
          type: "set-duration",
          payload: +duration,
        });
      }
      if (data["field"] === "description") {
        console.log({des: data})
        dispatch({
          type: "set-description",
          payload: description,
        });
      }
    },
    []
  );

  return {
    todoData,
    dispatch,
    todoDataHandler,
    allowAction,
  };
};
