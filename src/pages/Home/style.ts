import styled from 'styled-components';

export const StyledHomePageWrapper = styled.main`
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
    column-gap: 20px;
    margin-bottom: 40px;

    .content-left-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    .today-todo-title,
    .recent-activity-title {
      padding: 16px 0;
      position: relative;
      font-weight: normal;
      font-size: ${({ theme }) => theme.fontSize.extraLarge};
      color: ${({ theme }) => theme.colors.primaryTextColor};
      background-color: ${({ theme }) => theme.colors.primaryBgColor};
    }

    .today-todo {
      flex: 1;
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      margin-right: 10px;
      position: relative;
      max-height: calc(100vh - 320px);
      overflow-y: auto;

      .today-todo-item-list {
        display: flex;
        flex-direction: column;
        row-gap: 12px;
        flex: 1;
        min-width: 500px;

        @media (max-width: ${({ theme }) => theme.breakpoints.LARGE_TABLET}px) {
          min-width: 100%;
        }
      }
      .today-todo-create {
        position: relative;
        min-width: 300px;
        height: auto;
        flex: 1;
        display: flex;
        align-items: flex-start;
        .todo-create-fields {
          position: sticky;
          top: 0;
        }
      }
    }

    .recent-activities {
      min-width: 320px;
      background: ${({ theme }) => theme.colors.secondaryBgColor};

      @media (max-width: ${({ theme }) => theme.breakpoints.TABLET}px) {
        display: none;
      }
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.LARGE_MOBILE}px) {
      margin: 0;
    }
  }
`;
