import React from "react";

export type SignupValueType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;

  fieldsCheck: {
    [filed: string]: {
      isPresent: boolean;
      isValid: boolean;
      requiredErrorMessage: string;
      validateErrorMessage: string;
    };
  };
};

export type SignupReducerActionType = {
  type: "email" | "password" | "confirmPassword" | "name" | "check-field";
  payload: string;
};

export type FormFiledType = {
  formValues: SignupValueType;
  onChangeHandler: React.Dispatch<SignupReducerActionType>;
  allowSubmitAction: boolean;
};
