import styled from 'styled-components';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;

export const StyledAppTitle = styled.h1`
  font-family: 'Bebas Neue', cursive;
  font-size: ${({ theme }) => theme.fontSize.extraLarge};
  color: ${({ theme }) => theme.colors.primaryTextColor};
  text-transformation: uppercase;
  letter-spacing: 1px;

  @media (max-width: ${({ theme }) => theme.breakpoints.TABLET}px) {
    font-size: ${({ theme }) => theme.fontSize.large};
  }
`;

export const StyledAppTitleLink = styled(Link)`
  text-decoration: none;
  font-size: inherit;
`;
