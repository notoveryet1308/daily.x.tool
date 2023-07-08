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
import ProtectedRoute from "./ProtectedRoute";
import Table from "./component/UI/Table/BasicTable";
import SingleTicket from "./pages/Planner/components/Ticket/SingleTicket";

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
          <Route path="/planner" exact>
            <ProtectedRoute>
              <Planner />
            </ProtectedRoute>
          </Route>
          <Route path="/planner/create" exact>
            <ProtectedRoute>
              <CrateTicket />
            </ProtectedRoute>
          </Route>
          <Route path="/planner/ticket/:ticketKey" exact>
            <ProtectedRoute>
              <SingleTicket />
            </ProtectedRoute>
          </Route>
          <Route path="/notes" exact>
            <ProtectedRoute>
              <Notes />
            </ProtectedRoute>
          </Route>
          <Route path="/notes/create" exact>
            <ProtectedRoute>
              <CreateNote />
            </ProtectedRoute>
          </Route>
          <Route path="/bookmark" exact>
            <ProtectedRoute>
              <Bookmark />
            </ProtectedRoute>
          </Route>
          <Route path="/bookmark/create" component={BookmarkCreate} exact>
            <ProtectedRoute>
              <BookmarkCreate />
            </ProtectedRoute>
          </Route>

          <Route path="/login" component={Login} exact />
          <Route path="/sign-up" component={Signup} exact />

          <Route path="/component-testing" component={Table} exact />
        </Switch>
      </StyledMainWrapper>
    </ThemeProvider>
  );
}

export default App;
