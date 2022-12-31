export type CreateTodoValueType = {
  description: {
    value: string;
    isRequired: boolean;
    isPresent: null | boolean;
    errorMessage: string;
  };
  duration: {
    value: number | null;
    isRequired: boolean;
    isPresent: boolean;
  };
};

export type DispatchType = {
  type: "set-duration" | "set-description" | "filed-validation" | "reset";

  payload: string | boolean | number;
};
