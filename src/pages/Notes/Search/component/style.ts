import styled from "styled-components";

export const StyledNoteSearch = styled.div`
  position: relative;
  .search-icon {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
    color: ${({ theme }) => theme.colors.primaryTextColor};
  }
`;
