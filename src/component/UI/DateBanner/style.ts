import styled from 'styled-components';

export const StyledDateBanner = styled.div`
  padding: 4px 8px;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.white};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 2px 2px;
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.white};
`;
