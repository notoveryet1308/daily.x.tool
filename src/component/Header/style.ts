import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeaderWrapper = styled.header`
  padding: 16px 60px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondaryBgColor};
  display: flex;
  align-items: center;
  justify-content: center;

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1280px;
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.LARGE_TABLET}px) {
    padding: 16px 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.MOBILE}px) {
    padding: 16px 16px;
  }
`;

export const StyledMainNavigation = styled.nav`
  display: flex;
  column-gap: 16px;
  align-items: center;
  
  .user-name{
    color: ${({ theme }) => theme.colors.primaryTextColor};
    font-size: color: ${({ theme }) => theme.fontSize.medium};
  }
`;

export const StyledChangeTheme = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 32px;
  height: 32px;
  border: 1px solid ${({ theme }) => theme.colors.primaryTextColor};
  border-radius: 50%;

  .ph-icon {
    color: ${({ theme }) => theme.colors.primaryTextColor};
  }
`;

export const StyledMobileHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .mobile-header-top {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4px;
  }

  .mobile-header-bottom {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledHeaderNavLink = styled(NavLink)`
  position: relative;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primaryTextColor};
  font-size: ${({ theme }) => theme.fontSize.medium};
  text-transform: uppercase;
  transition: all 300ms ease;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    left: 0;
    top: 100%;
  }

  &.selected,
  &:hover {
    color: ${({ theme }) => theme.colors.primaryTextColor};
    ::after {
      width: 100%;
      transition: all 300ms ease;
    }
  }

  &.user-profile{
    text-transform: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.TABLET}px) {
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;
