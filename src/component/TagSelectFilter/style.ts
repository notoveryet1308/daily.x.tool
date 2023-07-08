import styled from "styled-components";

export const StyledTagFilter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  .tag-label {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.secondaryTextColor};
  }

  .select-input-wrapper {
    background: ${({ theme }) => theme.colors.secondaryBgColor};
  }
`;
