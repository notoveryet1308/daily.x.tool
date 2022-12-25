import { useMutation, gql } from '@apollo/client';
import { useState, useReducer } from 'react';
import { useCheckRequiredValue } from '../../hooks';

const LOGIN_USER = gql`
  mutation LoginUser($input: LoginInput!) {
    login(input: $input)
  }
`;

const initialLoginCred: { email: string; password: string } = {
  email: 'example2@dev.com',
  password: '12346789',
};

const loginReducer = (
  state: { email: string; password: string },
  action: { type: 'login-email' | 'login-password'; payload: string }
) => {
  const { type, payload } = action;

  if (type === 'login-email') {
    console.log({ email: payload });
    return { ...state, email: payload };
  }

  if (type === 'login-password') {
    console.log({ password: payload });
    return { ...state, password: payload };
  }

  return state;
};

export const useLoginUser = () => {
  const [loginCred, dispatchLoginCred] = useReducer(
    loginReducer,
    initialLoginCred
  );
  const [allowAction] = useCheckRequiredValue({
    values: [loginCred.email, loginCred.password],
    type: 'and',
  });
  const [mutate, { loading, data, error }] = useMutation(LOGIN_USER);

  console.log({ allowAction, loginCred });

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
