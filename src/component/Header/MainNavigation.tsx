import React, { useId, ReactNode } from 'react';
import {useQuery, gql} from '@apollo/client';


import { StyledHeaderNavLink, StyledMainNavigation } from './style';

const GET_CURRENT_USER = gql`
  query CurrentUser{
      getCurrentLoggedInUser{
        _id 
        name
        email
      }
  }
`

const MainNavigation = ({
  className,
  data,
  children,
  type
}: {
  className?: string;
  data: { label: string; to: string }[];
  children?: ReactNode;
  type?:'auth-data'
}) => {
  const token = localStorage.getItem('accessToken')
  const currentUserQuery = useQuery(GET_CURRENT_USER)

  
  return (
    <StyledMainNavigation className={className}>
      {(type && type === 'auth-data' && token ) ?  <p className="user-name">Hello, {currentUserQuery?.data?.getCurrentLoggedInUser.name}</p> :
      data.map(({ label, to }) => (
        <StyledHeaderNavLink activeClassName="selected" to={to} key={useId()}>
          {label}
        </StyledHeaderNavLink>
      )) }
      {children}
    </StyledMainNavigation>
  );
};

export default MainNavigation;
