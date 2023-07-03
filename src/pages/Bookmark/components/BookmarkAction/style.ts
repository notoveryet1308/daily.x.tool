import styled from "styled-components";

export const StyledBookmarkUpdate = styled.div``;

export const StyledBookmarkInput = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 8px;

  .input-field-wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px 24px 16px 24px;
  }

  .create-bookmark-option {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    bottom: 0;
    position: sticky;
    padding: 16px 24px 24px 24px;
    background-color: ${({ theme }) => theme.colors.primaryBgColor};
  }
`;
