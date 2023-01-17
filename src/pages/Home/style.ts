import styled from 'styled-components';

export const StyledHomePageWrapper = styled.main`
  width: 100%;
  position: relative;

  .main-content-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0 60px 20px;
    justify-content: center;
    max-height: calc(100vh - 217px);

    @media (max-width: ${({ theme }) => theme.breakpoints.LARGE_TABLET}px) {
      padding: 0 32px 20px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.LARGE_MOBILE}px) {
      padding: 0 16px 16px;
      max-height: calc(100vh - 240px);
    }
  }

  .main-content {
    width: 100%;
    max-width: ${({ theme }) => theme.breakpoints.DESKTOP}px;
    display: flex;
    column-gap: 20px;

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
      position: relative;
      max-height: calc(100vh - 274px);
      overflow-y: auto;

      .today-todo-item-list {
        display: flex;
        flex-direction: column;
        row-gap: 12px;
        flex: 1;
        min-width: 500px;
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
      @media (max-width: ${({ theme }) => theme.breakpoints.LARGE_TABLET}px) {
        .today-todo-item-list {
          min-width: 100%;
        }
      }
      @media (max-width: ${({ theme }) => theme.breakpoints.TABLET}px) {
        .today-todo-item-list {
          min-width: 100%;
        }
        overflow-y: unset;
        max-height: unset;
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
