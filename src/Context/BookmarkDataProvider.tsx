import React, { createContext, useContext, useReducer } from "react";
import { bookmarkReducer } from "./reducers";
import { BookmarkInitialDataType, BookmarkContextDataType } from "./types";
import { CurrentBookmarkInitialValue } from "./initialValues";

const localStoredBookmark = localStorage.getItem("local-bookmark");
const bookmarkData = localStoredBookmark ? JSON.parse(localStoredBookmark) : [];

const initialValues: BookmarkInitialDataType = {
  currentBookmark: CurrentBookmarkInitialValue,
  bookmarkCollection: bookmarkData,
};

export const BookmarkContext = createContext<BookmarkContextDataType>(
  initialValues as BookmarkContextDataType
);

const BookmarkContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [bookmarkData, bookmarkDispatch] = useReducer(
    bookmarkReducer,
    initialValues
  );
  return (
    <BookmarkContext.Provider value={{ ...bookmarkData, bookmarkDispatch }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarkContext = () => useContext(BookmarkContext);

export default BookmarkContextProvider;
