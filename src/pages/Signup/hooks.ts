import { useReducer } from "react";
import { gql, useMutation } from "@apollo/client";
import { SignupReducerActionType, SignupValueType } from "./type";
import {
  onlyAlphaNumericCharacters,
  validateEmail,
  validatePassword,
} from "./utils";

const initialSignupValue: SignupValueType = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",

  fieldsCheck: {
    name: {
      isPresent: true,
      isValid: true,
      requiredErrorMessage: "Full name is a required.",
      validateErrorMessage: "Enter only alphabetical character & number",
    },
    email: {
      isPresent: true,
      isValid: true,
      requiredErrorMessage: "Email is a required.",
      validateErrorMessage: "Invalid email",
    },
    password: {
      isPresent: true,
      isValid: true,
      requiredErrorMessage: "Password is a required.",
      validateErrorMessage: "Follow password rules",
    },
    confirmPassword: {
      isPresent: true,
      isValid: true,
      requiredErrorMessage: "Confirm password is a required.",
      validateErrorMessage: "Password & confirm password did not match.",
    },
  },
};

const signupReducer = (
  state: SignupValueType,
  action: SignupReducerActionType
): SignupValueType => {
  const { type, payload } = action;

  if (type === "name") {
    return {
      ...state,
      name: payload,
      fieldsCheck: {
        ...state.fieldsCheck,
        name: {
          ...state.fieldsCheck.name,
          isPresent: !!payload,
        },
      },
    };
  }
  if (type === "email") {
    return {
      ...state,
      email: payload,
      fieldsCheck: {
        ...state.fieldsCheck,
        email: {
          ...state.fieldsCheck.email,
          isPresent: !!payload,
        },
      },
    };
  }
  if (type === "password") {
    return {
      ...state,
      password: payload,
    };
  }
  if (type === "confirmPassword") {
    return {
      ...state,
      confirmPassword: payload,
    };
  }

  if (type === "check-field") {
    const { isValid: passwordValid } = validatePassword(state.password);

    return {
      ...state,
      fieldsCheck: {
        name: {
          ...state.fieldsCheck.name,
          isPresent: !!state.name,
          isValid: onlyAlphaNumericCharacters(state.name),
        },
        email: {
          ...state.fieldsCheck.email,
          isPresent: !!state.email,
          isValid: validateEmail(state.email),
        },
        password: {
          ...state.fieldsCheck.password,
          isPresent: !!state.password,
          isValid: passwordValid,
        },
        confirmPassword: {
          ...state.fieldsCheck.confirmPassword,
          isPresent: !!state.confirmPassword,
          isValid: state.password === state.confirmPassword,
        },
      },
    };
  }
  return state;
};

const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      user {
        _id
        email
        name
      }
      token
    }
  }
`;

export const useUserSignup = () => {
  const [signupValues, dispatchSignup] = useReducer(
    signupReducer,
    initialSignupValue
  );

  const [mutate, { data, loading, error }] = useMutation(CREATE_USER);

  const handleUserCreation = () => {
    mutate({
      variables: {
        input: {
          name: signupValues.name,
          email: signupValues.email,
          password: signupValues.password,
        },
      },
    });
  };

  return { signupValues, dispatchSignup, handleUserCreation, data, loading, error };
};
