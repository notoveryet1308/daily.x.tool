import React, { useId, ReactNode } from "react";
import { useQuery, gql } from "@apollo/client";

import { StyledHeaderNavLink, StyledMainNavigation } from "./style";
import { GET_CURRENT_USER } from "../../CommonGQL";
import { Spin } from "antd";
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
 const {isUserAuthenticated, loggedInUserDetail} = useAppDataContext()

  return (
    <StyledMainNavigation className={className}>
      {type && type === "auth-data" && isUserAuthenticated && loggedInUserDetail? (
          <StyledHeaderNavLink to="/profile" className="user-profile">
            Hello, {loggedInUserDetail.name}
          </StyledHeaderNavLink>
      ) : (
        data.map(({ label, to }) => (
          <StyledHeaderNavLink activeClassName="selected" to={to} key={useId()}>
            {label}
          </StyledHeaderNavLink>
        ))
      )}
      {children}
    </StyledMainNavigation>
  );
};

export default MainNavigation;
