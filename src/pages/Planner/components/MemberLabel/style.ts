import styled from "styled-components";

export const StyledMemberLabel = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  .member-dp {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.colors.secondaryGreyColor};
    border: 1px solid ${({ theme }) => theme.colors.tertiaryGreyColor};
    border-radius: 50%;
    overflow: hidden;

    .member-image {
      height: 100%;
      width: 100%;
    }

    .initial {
      color: ${({ theme }) => theme.colors.primaryTextColorReversed};
      text-transform: uppercase;
      font-size: 8px;
    }
  }

  .member-name {
    color: ${({ theme }) => theme.colors.secondaryTextColor};
    font-size: 14px;
  }
`;
