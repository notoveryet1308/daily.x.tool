import styled from "styled-components";

export const StyledNoteSearch = styled.div`
  position: relative;
  min-width: 250px;
  padding: 0 10px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.secondaryBgColor};
  border: 1px solid ${({ theme }) => theme.colors.secondaryBgColor};

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.colors.primaryColor};
  }

  .search-icon {
    position: absolute;
    right: 24px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
    color: ${({ theme }) => theme.colors.primaryTextColor};
  }

  .note-search {
    border: none;
  }
`;
