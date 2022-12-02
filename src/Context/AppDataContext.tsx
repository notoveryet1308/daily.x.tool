import React, { createContext, useReducer, useContext } from 'react';
import { appDataType, appDataContextType, appDataAction } from './types';

const initialState: appDataType = {
  themeMode: 'dark',
  isUserAuthenticated: false,
};

export const AppDataContext = createContext<appDataContextType>(
  initialState as appDataContextType
);

const reducer = (state: appDataType, action: appDataAction): appDataType => {
  const { type, payload } = action;

  if (
    type === 'change-themeMode' &&
    (payload === 'main' || payload === 'dark')
  ) {
    return { ...state, themeMode: payload };
  }
  if (type === 'user-auth' && typeof payload === 'boolean') {
    return { ...state, isUserAuthenticated: payload };
  }
  return state;
};

const AppDataProvider = ({ children }: { children: React.ReactNode }) => {
  const [appData, dispatch] = useReducer(reducer, initialState);
  return (
    <AppDataContext.Provider value={{ ...appData, dispatch }}>
      {children}
    </AppDataContext.Provider>
  );
};

export const useAppDataContext = () => useContext(AppDataContext);

export default AppDataProvider;
