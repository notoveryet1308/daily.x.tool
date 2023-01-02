import { useReducer } from 'react';
import { useMutation, gql } from '@apollo/client';
import jwt_decode from "jwt-decode";

import { useCheckRequiredValue } from '../../hooks';
import { useAppDataContext } from '../../Context/AppDataContext';

const LOGIN_USER = gql`
  mutation LoginUser($input: LoginInput!) {
    login(input: $input)
  }
`;

const initialLoginCred: { email: string; password: string } = {
  email: '',
  password: '',
};

const loginReducer = (
  state: { email: string; password: string },
  action: { type: 'login-email' | 'login-password'; payload: string }
) => {
  const { type, payload } = action;

  if (type === 'login-email') {
    return { ...state, email: payload };
  }

  if (type === 'login-password') {
    return { ...state, password: payload };
  }

  return state;
};

export const useLoginUser = () => {
 const {dispatch} = useAppDataContext()
  const [loginCred, dispatchLoginCred] = useReducer(
    loginReducer,
    initialLoginCred
  );
  const [allowAction] = useCheckRequiredValue({
    values: [!!loginCred.email, !!loginCred.password],
    type: 'and',
  });
  const [mutate, { loading, data, error }] = useMutation(LOGIN_USER, {
    onCompleted(data){
      if(data.login){
        localStorage.setItem("accessToken", JSON.stringify(data.login));
       const jwtDecoded:{email: string; _id: string; name: string} = jwt_decode(data.login)
       dispatch({ type: "user-auth", payload: jwtDecoded });
      }
    }
  });

  const loginHandler = () => {
    mutate({
      variables: {
        input: {
          email: loginCred.email,
          password: loginCred.password,
        },
      },
    });
  };

  return {
    loginHandler,
    dispatchLoginCred,
    allowAction,
    loginCred,
    data,
    loading,
    error,
  };
};
