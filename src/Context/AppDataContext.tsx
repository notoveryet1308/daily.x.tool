import React, { createContext, useReducer, useContext } from 'react';
import { StaticColors } from '../theme/constants';
import { appDataType, appDataContextType, appDataAction } from './types';

const initialState: appDataType = {
  themeMode: window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'main',
  isUserAuthenticated: false,
  staticColors: StaticColors,
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

  if (type === 'set-more-static-colors' && typeof payload === 'string') {
    return { ...state, staticColors: [...state.staticColors, payload] };
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
