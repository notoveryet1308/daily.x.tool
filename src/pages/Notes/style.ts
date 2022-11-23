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
    .note-filter {
      width: 100%;
      height: 60px;
    }
  }
`;

export const StyledNoteListDisplay = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  /* align-items: flex-start; */
  grid-template-rows: auto;
  grid-auto-flow: row;
  justify-content: center;
  .row-1,
  .row-2,
  .row-3,
  .row-4 {
    display: grid;
    gap: 20px;
    grid-template-columns: minmax(300px, 1fr);
    grid-template-rows: auto;
    /* align-items: flex-start; */
  }
`;
