import { ReactNode } from "react";

import { Redirect } from "react-router-dom";
import { useAppDataContext } from "./Context/AppDataContext";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isUserAuthenticated } = useAppDataContext();

  if (!isUserAuthenticated) {
    return <Redirect to="/login" />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
