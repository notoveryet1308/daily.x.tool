import styled from "styled-components";

export const StyledBookmarkPageWrapper = styled.main`
  width: 100%;
  position: relative;

  .main-content-wrapper {
    width: 100%;
    display: flex;
    height: 100%;
    justify-content: center;
    padding: 0 60px 20px;
    max-height: calc(100vh - 64px);
    @media (max-width: ${({ theme }) => theme.breakpoints.LARGE_TABLET}px) {
      padding: 0 32px 20px;
      max-height: calc(100vh - 87px);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.MOBILE}px) {
      padding: 0 16px 10px;
    }
  }
  .main-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;
    margin-bottom: 40px;
    max-width: ${({ theme }) => theme.breakpoints.DESKTOP}px;

    .bookmark-filter-content {
      margin-top: 24px;
      display: flex;
      width: 100%;
      max-width: 280px;
    }

    .bookmark-list-content {
      display: flex;
      justify-content: center;
      height: auto;

      .no-data-state {
        height: 80vh;
        background-color: ${({ theme }) => theme.colors.primaryBgColor};
      }

      .empty-bookmark-icon {
        font-size: 60px;
        color: ${({ theme }) => theme.colors.secondaryGreyColor};
      }
    }

    .create-bookmark-btn-wrapper {
      position: fixed;
      bottom: 40px;
      left: 50%;
      transform: translateX(-50%);
      width: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${({ theme }) => theme.colors.createBtnBg};
      border-radius: 4px;
      overflow: hidden;
      cursor: move;

      .plus-icon {
        font-size: 20px;
        font-weight: bold;
      }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.LARGE_MOBILE}px) {
      margin: 0;
      .create-bookmark-btn-wrapper {
        width: unset;
        border-radius: 50%;
        left: calc(100% - 60px);
        transform: unset;
        cursor: default;
      }

      .bookmark-filter-content {
        max-width: 100%;
      }
    }
  }
`;

export const StyledBookmarkCreate = styled.div`
  width: 100%;
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  justify-content: center;
  align-items: center;
  padding: 24px;

  .bookmark-url-wrapper {
    width: 100%;
    flex: 1;
    padding-bottom: 24px;
  }

  .bookmark-url {
    width: 100%;
    max-width: 600px;
  }

  .bookmark-create-action {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    column-gap: 16px;
  }
`;

export const StyledBookmarkDisplayList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 20px;
  height: 100%;
  width: 100%;
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.LARGE_MOBILE}px) {
    display: flex;
    flex-direction: column;
  }
`;
