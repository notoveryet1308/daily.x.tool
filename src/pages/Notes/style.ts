import styled from 'styled-components';

export const StyledNotesPageWrapper = styled.main`
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
    row-gap: 20px;
    position: relative;
    margin-bottom: 40px;
    flex-direction: column;
    max-width: ${({ theme }) => theme.breakpoints.DESKTOP}px;

    .notes-empty-state {
      background-color: transparent;
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .note-filter {
      width: 100%;
      height: 60px;
    }

    .note-list-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      overflow-y: auto;
    }

    .create-note-btn-wrapper {
      position: absolute;
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

      .create-note-btn {
      }
      .plus-icon {
        font-size: 20px;
        font-weight: bold;
      }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.LARGE_MOBILE}px) {
      margin: 0;
      .create-note-btn-wrapper {
        width: unset;
        border-radius: 50%;
        left: calc(100% - 48px);
        transform: unset;
        cursor: default;
      }
    }
  }
`;

export const StyledCreateNotePageWrapper = styled.main`
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
    justify-content: center;
    gap: 20px;
    position: relative;
    margin-bottom: 40px;
    max-width: ${({ theme }) => theme.breakpoints.DESKTOP}px;
    padding: 60px 0 24px 0;
    position: relative;

    .create-note-fields {
      display: flex;
      flex-direction: column;
      height: 100%;
      gap: 24px;
      overflow-y: scroll;
      min-width: 360px;
      max-width: 500px;

      .create-note-inputs {
        .create-note-description {
          flex: 1;
        }
      }
    }

    .create-note-preview {
      position: sticky;
      top: 0;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      width: 100%;
      /* height: 100%; */
      max-width: 500px;
      .create-note {
        width: 100%;
        /* height: 100%; */
      }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.TABLET}px) {
      .create-note-preview {
        display: none;
      }
    }
  }
`;

export const StyledNoteListDisplay = styled.div`
  max-height: calc(100vh - 160px);
  height: auto;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 40px;
  /* grid-template-rows: auto; */
  grid-auto-rows: 250px;
  /* justify-content: center; */
  .row-1,
  .row-2,
  .row-3 {
    display: grid;
    gap: 40px;
    grid-template-columns: minmax(300px, 1fr);
    grid-template-rows: auto;
  }
`;
