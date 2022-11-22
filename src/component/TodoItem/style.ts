import styled from 'styled-components';

export const StyledTodoItem = styled.div<{ completed: boolean }>`
  position: relative;
  background-color: ${({ theme }) => theme.colors.tertiaryBgColor};
  border-radius: 4px;
  display: inline-flex;
  column-gap: 8px;
  justify-content: flex-start;
  align-items: center;
  padding-left: 16px;
  overflow: hidden;

  .todo-icon-wrapper {
    width: 24px;
    height: 24px;
    cursor: pointer;

    .ph-icon {
      font-size: 24px;
      color: ${({ theme }) => theme.colors.primaryColor};
    }
  }

  .todo-description-wrapper {
    position: relative;
    padding: 16px 16px 16px 0;
    flex: 1;
    word-wrap: break-word;

    .todo-description-value {
      color: ${({ theme }) => theme.colors.primaryTextColor};
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: calc(100% + 4px);
      height: 100%;
      padding-left: 10px;

      background-color: ${({ theme }) => theme.colors.todoItemOverlay};
      transform: translateX(
        ${({ completed }) => (!completed ? '100%' : ' -4px')}
      );
      transition: transform 300ms ease;
      border-top: 2px solid ${({ theme }) => theme.colors.secondaryColor};
    }
  }
`;

export const StyledCreateTodo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: ${({ theme }) => theme.space.small2};
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.tertiaryBgColor};

  .create-todo-title {
    font-size: ${({ theme }) => theme.fontSize.large};
    font-weight: normal;
    color: ${({ theme }) => theme.colors.primaryTextColor};
  }
`;
