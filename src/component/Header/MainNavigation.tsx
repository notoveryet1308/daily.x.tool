import React, { useId, ReactNode } from "react";
import { useQuery, gql } from "@apollo/client";

import { StyledHeaderNavLink, StyledMainNavigation } from "./style";
import { GET_CURRENT_USER } from "../../CommonGQL";
import { Spin } from "antd";

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
  const token = localStorage.getItem("accessToken");
  const currentUserQuery = useQuery(GET_CURRENT_USER);

  return (
    <StyledMainNavigation className={className}>
      {type && type === "auth-data" && token ? (
        currentUserQuery.loading ? (
          <p className="user-name">Loading...</p>
        ) : (
          <StyledHeaderNavLink to="/profile" className="user-profile">
            Hello, {currentUserQuery?.data?.getCurrentLoggedInUser.name}
          </StyledHeaderNavLink>
        )
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
