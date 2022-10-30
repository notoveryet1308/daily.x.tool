import React, { useId, ReactNode } from 'react';

import { StyledHeaderNavLink, StyledMainNavigation } from './style';

const MainNavigation = ({
  className,
  data,
  children,
}: {
  className?: string;
  data: { label: string; to: string }[];
  children?: ReactNode;
}) => {
  return (
    <StyledMainNavigation className={className}>
      {data.map(({ label, to }) => (
        <StyledHeaderNavLink activeClassName="selected" to={to} key={useId()}>
          {label}
        </StyledHeaderNavLink>
      ))}
      {children}
    </StyledMainNavigation>
  );
};

export default MainNavigation;
