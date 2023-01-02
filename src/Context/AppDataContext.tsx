import React, { createContext, useReducer, useContext } from 'react';
import { StaticColors } from '../theme/constants';
import { isUserAuthenticated, getCurrentLoggedInUserDeatil } from '../utils';
import { appDataType, appDataContextType, appDataAction } from './types';



const initialState: appDataType = {
  themeMode: window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'main',
  isUserAuthenticated: isUserAuthenticated(),
  staticColors: StaticColors,
  loggedInUserDetail: getCurrentLoggedInUserDeatil(),
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
  if (type === 'user-auth' && typeof payload === 'object') {
    return { ...state, isUserAuthenticated: true, loggedInUserDetail: payload };
  }

  if (type === 'set-more-static-colors' && typeof payload === 'string') {
    return { ...state, staticColors: [...state.staticColors, payload] };
  }
  if(type === 'reset-auth'){
    localStorage.removeItem('accessToken')
    return {...state, isUserAuthenticated: false, loggedInUserDetail: null}
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
