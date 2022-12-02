import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from './theme';

import Header from './component/Header';
import Today from './pages/AllTodays';
import { GlobalStyle, StyledMainWrapper } from './style';
import Sprint from './pages/Sprint';
import Home from './pages/Home';
import Notes from './pages/Notes';
import { useAppDataContext } from './Context/AppDataContext';

function App() {
  const { themeMode, dispatch } = useAppDataContext();

  const handleColorTheme = () => {
    if (themeMode === 'main') {
      dispatch({ type: 'change-themeMode', payload: 'dark' });
    } else {
      dispatch({ type: 'change-themeMode', payload: 'main' });
    }
  };

  return (
    <ThemeProvider theme={{ ...theme, colors: theme.colors[themeMode] }}>
      <GlobalStyle />
      <Header colorTheme={themeMode} handleColorTheme={handleColorTheme} />
      <StyledMainWrapper>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/all-today' component={Today} exact />
          <Route path='/sprint' component={Sprint} exact />
          <Route path='/notes' component={Notes} exact />
        </Switch>
      </StyledMainWrapper>
    </ThemeProvider>
  );
}

export default App;
