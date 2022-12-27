import { useReducer } from "react";
import { SignupReducerActionType, SignupValueType } from "./type";
import { onlyAlphaNumericCharacters, validateEmail, validatePassword } from "./utils";

const initialSignupValue: SignupValueType = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",

  fieldsCheck:{
    name: {
      isPresent: true,
      isValid: false,
      requiredErrorMessage: "Full name is a required.",
      validateErrorMessage:"Enter only alphabetical character & number"
    },
    email: {
      isPresent: true,
      isValid: false,
      requiredErrorMessage: "Email is a required.",
      validateErrorMessage:"Invalid email"
    },
    password: {
      isPresent: true,
      isValid: false,
      requiredErrorMessage: "Password is a required.",
      validateErrorMessage:"Follow password rules"
    },
    confirmPassword: {
      isPresent: true,
      isValid: false,
      requiredErrorMessage: "Confirm password is a required.",
      validateErrorMessage:"Password & confirm password did not match."
    },
  }

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
      fieldsCheck:{
        ...state.fieldsCheck,
        name:{
          ...state.fieldsCheck.name,
          isPresent: !!payload
        },
      }
    };
  }
  if (type === "email") {
    return {
      ...state,
      email: payload,
      fieldsCheck:{
        ...state.fieldsCheck,
        email:{
          ...state.fieldsCheck.email,
          isPresent: !!payload
        },
      }
    };
  }
  if (type === "password") {
    const {isValid: passwordValid} = validatePassword(state.password);

    return {
      ...state,
      password: payload,
      fieldsCheck:{
        ...state.fieldsCheck,
        password:{
          ...state.fieldsCheck.password,
          isValid: passwordValid,
          isPresent:!!payload
        },
        confirmPassword:{
          ...state.fieldsCheck.confirmPassword,
          isValid: state.password === state.confirmPassword
        }
      }
    };
  }
  if (type === "confirmPassword") {
    return {
      ...state,
      confirmPassword: payload,
      fieldsCheck:{
        ...state.fieldsCheck,
        confirmPassword:{
          ...state.fieldsCheck.confirmPassword,
          isValid: state.password === payload,
          isPresent: !!payload
        }
      }
    };
  }

  if(type === 'check-field'){
   
    return {
      ...state, 
      fieldsCheck:{
        name:{
          ...state.fieldsCheck.name,
          isPresent: !!state.name,
          isValid: onlyAlphaNumericCharacters(state.name)
        },
        email:{
          ...state.fieldsCheck.email,
          isPresent: !!state.email,
          isValid: validateEmail(state.email)
        }, 
        password:{
          ...state.fieldsCheck.password,
          isPresent: !!state.password,
        },
        confirmPassword:{
          ...state.fieldsCheck.confirmPassword,
          isPresent: !!state.confirmPassword,
        }       
      }
    }
  }
  return state;
};

export const useUserSignup = () => {
  const [signupValues, dispatchSignup] = useReducer(
    signupReducer,
    initialSignupValue
  );

  return { signupValues, dispatchSignup };
};
