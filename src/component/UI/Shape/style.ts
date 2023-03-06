import styled from "styled-components";

export const StyledBlobWrapper = styled.div<{ isOutline: boolean }>`
  width: 200px;
  height: 200px;
  background: ${({ theme }) => theme.colors.secondaryBgColor};
  border-radius: 30% 70% 70% 30% / 43% 30% 70% 57%;
  padding: 16px;
  opacity: 0.4;
`;
