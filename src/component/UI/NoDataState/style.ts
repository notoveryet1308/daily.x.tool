import styled from "styled-components";

export const StyledNoDataWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: ${({ theme }) => theme.space.small2};
  background-color: ${({ theme }) => theme.colors.secondaryBgColor};
  border-radius: 8px;
  padding: 16px;

  img {
    width: 200px;
    max-height: 200px;
  }

  .nodata-message {
    color: ${({ theme }) => theme.colors.primaryTextColor};
    font-size: ${({ theme }) => theme.fontSize.medium};
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.TABLET}px) {
    img {
      width: 150px;
      max-height: 150px;
    }
  }
`;

export const StyledInlineNoDataFound = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;

  .inline-top {
    display: flex;
    align-items: center;
    gap: 12px;
    color: ${({ theme }) => theme.colors.secondaryTextColor};

    .inline-top-icon {
      display: flex;
      align-items: center;
      font-size: 20px;
      color: inherit;
    }

    .inline-top-main-text {
      font-size: 14px;
      color: inherit;
    }
  }

  .inline-sub-text {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.secondaryGreyColor};
    text-align: center;
  }
`;
