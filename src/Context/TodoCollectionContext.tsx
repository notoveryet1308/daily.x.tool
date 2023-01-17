import React, { createContext, useContext, useEffect, useState } from "react";

import { TodoCollectionContextType, TodoCollectionType } from "./types";

const TodoCollectionContext = createContext<TodoCollectionContextType>(
  {} as TodoCollectionContextType
);

const TodoCollectionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const locallyStoredTodo = localStorage.getItem("local-todo");
  const todoData = locallyStoredTodo ? JSON.parse(locallyStoredTodo) : [];
  const [todoCollectionData, setTodoCollectionData] = useState<
    TodoCollectionType[]
  >([...todoData]);

  useEffect(() => {
    if(todoCollectionData.length){
      localStorage.setItem('local-todo', JSON.stringify(todoCollectionData))
    }
  }, [todoCollectionData]);

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
