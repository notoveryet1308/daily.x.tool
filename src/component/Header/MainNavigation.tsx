import  { useId, ReactNode } from "react";

import { StyledHeaderNavLink, StyledMainNavigation } from "./style";
import { useAppDataContext } from "../../Context/AppDataContext";

const MainNavigation = ({
  className,
  data,
  children,
  type,
}: {
  className?: string;
  data: { label: string; to: string }[];
  children?: ReactNode;
  type?: "auth-data";
}) => {
 const {isUserAuthenticated, loggedInUserDetail, dispatch } = useAppDataContext()

  return (
    <StyledMainNavigation className={className}>
      {type && type === "auth-data" && isUserAuthenticated && loggedInUserDetail? (
          <>
            <StyledHeaderNavLink to="/profile" className="user-profile">
            Hello, {loggedInUserDetail.name}
          </StyledHeaderNavLink>
          <p className="user-logout" onClick={()=>{
            dispatch({type:'reset-auth', payload:''})
          }}>Logout</p>
          </>
      ) : (
        data.map(({ label, to }) => (
          <StyledHeaderNavLink activeClassName="selected" to={to} key={`${to}-main-nav-key`}>
            {label}
          </StyledHeaderNavLink>
        ))
      )}
      {children}
    </StyledMainNavigation>
  );
};

export default MainNavigation;
