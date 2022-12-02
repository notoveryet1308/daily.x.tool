import styled from 'styled-components';

export const StyledNotesPageWrapper = styled.main`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .main-content-wrapper {
    width: 100%;
    display: flex;
    height: 100%;
    justify-content: center;
    padding: 0 60px;

    @media (max-width: ${({ theme }) => theme.breakpoints.LARGE_TABLET}px) {
      padding: 0 32px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.MOBILE}px) {
      padding: 0 16px;
    }
  }
  .main-content {
    width: 100%;
    max-width: ${({ theme }) => theme.breakpoints.DESKTOP}px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    margin-bottom: 40px;
    height: 100%;
    .note-filter {
      width: 100%;
      height: 60px;
    }

    .note-list-wrapper {
      width: 100%;
      height: 100%;
    }

    .create-note-btn-wrapper {
      position: absolute;
      bottom: 60px;
      left: 50%;
      bottom: 70px;
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
  }
`;

export const StyledNoteListDisplay = styled.div`
  max-height: calc(100vh - 160px);
  height: auto;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  grid-template-rows: auto;
  grid-auto-flow: row;
  justify-content: center;
  .row-1,
  .row-2,
  .row-3 {
    display: grid;
    gap: 40px;
    grid-template-columns: minmax(300px, 1fr);
    grid-template-rows: auto;
  }
`;
