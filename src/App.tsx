import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import theme from "./theme";

import Header from "./component/Header";
import Today from "./pages/AllTodays";
import { GlobalStyle, StyledMainWrapper } from "./style";
import Sprint from "./pages/Sprint";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import { useAppDataContext } from "./Context/AppDataContext";
import { useGetLoggedUserDetail } from "./CommonGQL";
import {  isUserAuthenticated } from "./utils";


function App() {
  const { themeMode, dispatch } = useAppDataContext();
  const {data, loading, error} = useGetLoggedUserDetail();

  if(isUserAuthenticated() && !loading && !data){
    localStorage.removeItem('accessToken')
    dispatch({type: "reset-auth", payload: ""})
  }

  const handleColorTheme = () => {
    if (themeMode === "main") {
      dispatch({ type: "change-themeMode", payload: "dark" });
    } else {
      dispatch({ type: "change-themeMode", payload: "main" });
    }
  };

  return (
    <ThemeProvider theme={{ ...theme, colors: theme.colors[themeMode] }}>
      <GlobalStyle />
      <Header colorTheme={themeMode} handleColorTheme={handleColorTheme} />
      <StyledMainWrapper>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/all-today" component={Today} exact />
          <Route path="/sprint" component={Sprint} exact />
          <Route path="/notes" component={Notes} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/sign-up" component={Signup} exact />
        </Switch>
      </StyledMainWrapper>
    </ThemeProvider>
  );
}

export default App;
