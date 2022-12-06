import styled from 'styled-components';

export const StyledCreateNoteDetail = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  .main-input-form-title {
    border: none;
    background-color: ${({ theme }) => theme.colors.secondaryBgColor};
  }

  .main-input-tag-select {
    margin: 16px 0;
  }
`;
