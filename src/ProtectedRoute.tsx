import { ReactNode } from "react";

import { useHistory, useLocation } from "react-router-dom";
import { useAppDataContext } from "./Context/AppDataContext";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const history = useHistory();
  const location = useLocation();

  const { isUserAuthenticated } = useAppDataContext();

  if (!isUserAuthenticated) {
    history.push({
      pathname: "/login",
      state: { from: location.pathname },
    });
  }
  return <>{children}</>;
};

export default ProtectedRoute;
