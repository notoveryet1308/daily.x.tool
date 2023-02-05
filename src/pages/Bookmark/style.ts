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

    .bookmark-list-content {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
      gap: 20px;
      justify-content: center;
      align-items: center;
    }

    .create-bookmark-btn-wrapper {
      position: fixed;
      bottom: 40px;
      left: 50%;
      transform: translateX(-50%);
      width: 300px;
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
    }
  }
`;

export const StyledBookmarkCreate = styled.div`
  width: 100%;
  position: relative;

  .main-content-wrapper {
    width: 100%;
    display: flex;
    height: 100%;
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
    justify-content: center;
    gap: 20px;
    position: relative;
    margin-bottom: 40px;
    max-width: ${({ theme }) => theme.breakpoints.DESKTOP}px;
    padding: 60px 0 24px 0;
    position: relative;

    .create-bookmark-fields {
      display: flex;
      flex-direction: column;
      gap: 24px;
      max-width: 500px;
      width: 100%;
      padding-bottom: 60px;

      .create-bookmark-url-wrapper {
        background-color: ${({ theme }) => theme.colors.tertiaryBgColor};
        padding: 4px 8px;
        border-radius: 40px;
        border: 1px solid transparent;

        &:focus-within {
          border: 1px solid ${({ theme }) => theme.colors.primaryColor};
        }

        .bookmark-url {
          border: none;
        }
      }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.TABLET}px) {
      flex-direction: column;
      padding-top: 20px;
      justify-content: flex-start;
    }
  }
`;
