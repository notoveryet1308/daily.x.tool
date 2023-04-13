import styled from "styled-components";

export const StyledBaseStatus = styled.div<{ hexCode: string }>`
  padding: 4px 8px;
  color: ${({ theme }) => theme.colors.primaryTextColorReversed};
  font-size: 14px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${({ hexCode, theme }) =>
    !hexCode ? theme.colors.tertiaryBgColor : hexCode};
`;
