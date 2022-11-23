import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from './theme';

import Header from './component/Header';
import Today from './pages/AllTodays';
import { StyledMainWrapper } from './style';
import Sprint from './pages/Sprint';
import Home from './pages/Home';
import Notes from './pages/Notes';

function App() {
  const [themeColor, setThemeColor] = useState('main');

  const handleColorTheme = () => {
    if (themeColor === 'main') {
      setThemeColor('dark');
    } else {
      setThemeColor('main');
    }
  };

  return (
    <ThemeProvider theme={{ ...theme, colors: theme.colors[themeColor] }}>
      <Header colorTheme={themeColor} handleColorTheme={handleColorTheme} />
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
