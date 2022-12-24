import styled from 'styled-components';

export const StyledTodoItem = styled.div<{
  completed: boolean;
  duration: boolean;
}>`
  column-gap: 8px;
  overflow: hidden;
  position: relative;
  border-radius: 4px;
  padding-left: 12px;
  display: inline-flex;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.tertiaryBgColor};

  .todo-duration {
    top: 0;
    right: 0;
    padding: 2px 8px;
    position: absolute;
    border-radius: 0 4px 0 4px;
    font-size: ${({ theme }) => theme.fontSize.small};
    color: ${({ theme }) => theme.colors.primaryTextColor};
    background-color: ${({ theme }) => theme.colors.warningColor};
  }

  .todo-icon-wrapper {
    width: 24px;
    height: 24px;
    cursor: pointer;
    margin-top: 16px;

    .ph-icon {
      font-size: 24px;
      color: ${({ theme }) => theme.colors.primaryColor};
    }
  }

  .todo-description-wrapper {
    flex: 1;
    gap: 16px;
    padding: 16px;
    padding-top: ${({ duration }) => duration && '20px'};
    display: flex;
    position: relative;
    word-wrap: break-word;
    flex-direction: column;
    border-left: 1px solid ${({ theme }) => theme.colors.primaryColor};

    .todo-description-value {
      color: ${({ theme }) => theme.colors.primaryTextColor};
    }

    .todo-creation-date {
      font-size: ${({ theme }) => theme.fontSize.small};
      color: ${({ theme }) => theme.colors.primaryColor};
    }

    &::after {
      top: 0;
      left: 0;
      content: '';
      height: 100%;
      display: block;
      position: absolute;
      width: calc(100% + 4px);
      transition: transform 300ms ease;
      background-color: ${({ theme }) => theme.colors.todoItemOverlay};
      border-top: 2px solid ${({ theme }) => theme.colors.primaryColor};
      transform: translateX(${({ completed }) => (!completed ? '100%' : '0')});
    }
  }

  .action-btn-wrapper {
    position: absolute;
    display: flex;
    gap: 8px;
    bottom: 16px;
    right: 16px;
    .ph-icon {
      font-size: 20px;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.primaryColor};
    }
  }
`;

export const StyledCreateTodo = styled.div`
  width: 100%;
  display: flex;
  padding: 16px;
  border-radius: 8px;
  flex-direction: column;
  align-items: flex-start;
  row-gap: ${({ theme }) => theme.space.small2};
  background-color: ${({ theme }) => theme.colors.tertiaryBgColor};

  .create-todo-title {
    font-size: ${({ theme }) => theme.fontSize.large};
    font-weight: normal;
    color: ${({ theme }) => theme.colors.primaryTextColor};
  }

  .create-todo-command {
    outline: none;

    &:hover,
    &:focus {
      border: none;
      box-shadow: none;
    }
  }

  .create-todo-duration {
    outline: none;
    transition: none;
    border-color: transparent;
    background-color: ${({ theme }) => theme.colors.secondaryBgColor};
  }

  .create-todo-button {
    align-self: flex-end;
  }
`;
