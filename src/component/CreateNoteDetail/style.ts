import styled from "styled-components";

export const StyledCreateNoteDetail = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  .main-input-tag-select {
    margin: 16px 0;
  }

  .create-note-submit {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const StyledNoteInputField = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  .main-note-inputs {
    display: flex;
    flex-direction: column;

    .main-input-form-title {
      border: none;
      background-color: ${({ theme }) => theme.colors.secondaryBgColor};
      border-bottom: 1px solid ${({ theme }) => theme.colors.primaryGreyColor};
      border-radius: 4px 4px 0 0;
    }
  }
`;
