import styled from "styled-components";

export const StyledCreateEditFields = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  row-gap: 16px;
  flex: 1;

  .edit-filed-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 8px 16px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    column-gap: 8px;
    width: 100%;
    border-top: 1px solid ${({ theme }) => theme.colors.secondaryGreyColor};
    background-color: ${({ theme }) => theme.colors.primaryGreyColor};
  }
`;

export const StyledViewFiled = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondaryBgColor};
  flex: 1;
  row-gap: 16px;
  padding: 16px;

  border-radius: 8px;
  cursor: pointer;
`;
