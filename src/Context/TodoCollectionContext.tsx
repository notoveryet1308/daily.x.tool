import React, { createContext, useContext, useState } from 'react';

import { TodoCollectionContextType, TodoCollectionType } from './types';

const TodoCollectionContext = createContext<TodoCollectionContextType>(
  {} as TodoCollectionContextType
);

const TodoCollectionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [todoCollectionData, setTodoCollectionData] = useState<
    TodoCollectionType[] | []
  >([]);

  return (
    <TodoCollectionContext.Provider
      value={{ todoCollectionData, addToTodoCollection: setTodoCollectionData }}
    >
      {children}
    </TodoCollectionContext.Provider>
  );
};

export const useTodoCollectionContext = () => useContext(TodoCollectionContext);

export default TodoCollectionProvider;
