import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import theme from "./theme";

import Header from "./component/Header";
// import Today from "./pages/AllTodays";
import { GlobalStyle, StyledMainWrapper } from "./style";

import Home from "./pages/Home";
import Notes from "./pages/Notes";
import CreateNote from "./pages/Notes/CreateNote";
import Bookmark from "./pages/Bookmark";
import BookmarkCreate from "./pages/Bookmark/BookmarkCreate";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

import { useAppDataContext } from "./Context/AppDataContext";
import { useGetLoggedUserDetail } from "./CommonGQL";
import { isUserAuthenticated } from "./utils";
import Planner from "./pages/Planner";
import CrateTicket from "./pages/Planner/components/Ticket/CreateTicket";

function App() {
  const { themeMode, dispatch } = useAppDataContext();
  const { data, loading, error } = useGetLoggedUserDetail();

  if (isUserAuthenticated() && !loading && !data) {
    localStorage.removeItem("accessToken");
    dispatch({ type: "reset-auth", payload: "" });
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
          {/* <Route path="/all-today" component={Today} exact /> */}
          <Route path="/planner" component={Planner} exact />
          <Route path="/planner/create" component={CrateTicket} exact />
          <Route path="/notes" component={Notes} exact />
          <Route path="/notes/create" component={CreateNote} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/sign-up" component={Signup} exact />
          <Route path="/bookmark" component={Bookmark} exact />
          <Route path="/bookmark/create" component={BookmarkCreate} exact />
        </Switch>
      </StyledMainWrapper>
    </ThemeProvider>
  );
}

export default App;
