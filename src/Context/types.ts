export type userType = {
  _id: string;
  name: string;
  email: string;
};

export type appDataType = {
  themeMode: "main" | "dark";
  isUserAuthenticated: boolean;
  staticColors: string[];
  loggedInUserDetail: userType | null;
};

export type appDataAction = {
  type:
    | "change-themeMode"
    | "user-auth"
    | "set-more-static-colors"
    | "reset-auth";
  payload: string | boolean | userType;
};

export interface appDataContextType extends appDataType {
  dispatch: React.Dispatch<appDataAction>;
}

export interface TodoCollectionType {
  id: string;
  duration: number | null;
  description: string;
  createdOn: number;
  isCompleted: boolean;
}

export interface TodoCollectionContextType extends TodoCollectionType {
  todoCollectionData: TodoCollectionType[];
  addToTodoCollection: React.Dispatch<
    React.SetStateAction<TodoCollectionType[]>
  >;
}

export interface tagType {
  label: string;
  value: string;
  id: string;
}

export interface NoteDataType {
  id: string;
  title: string;
  tags: tagType[];
  hexCode: string;
  createdOn: number;
  isPinned: boolean;
  description: string;
  updatedOn: number;
}

export interface currentNoteDataType {
  data: NoteDataType;
  isAllRequiredDataAvailable: boolean;
  isUpdated: boolean;
}

export interface InitialNoteValueType {
  currentNote: currentNoteDataType;
  noteCollection: NoteDataType[] | [];
  isEditing: boolean;
  noteFilter: NoteFilterDataType;
  noteSearch: string;
}

export interface NoteFilterDataType {
  colors: string[] | [];
  noteTags: tagType[] | [];
}

export type NoteDispatchActionType = {
  type:
    | "set-current-note-title"
    | "set-current-note-tags"
    | "set-current-note-description"
    | "set-current-note-color-hex"
    | "set-current-note-auto-value"
    | "add-to-note-collection"
    | "update-isPinned-status"
    | "reset-current-note"
    | "update-current-note"
    | "set-note-editing-status"
    | "update-note-filter"
    | "reset-note-filter"
    | "update-note-search"
    | "reset-note-search";
  payload:
    | string
    | number
    | boolean
    | tagType[]
    | NoteDataType[]
    | NoteDataType
    | { id: string; isPinned: boolean }
    | NoteFilterDataType;
};

export interface NoteContextDataType extends InitialNoteValueType {
  noteDispatch: React.Dispatch<NoteDispatchActionType>;
}

export interface BookmarkDataType {
  id: string;
  ogImg?: string;
  ogTitle?: string;
  ogUrl: string;
  tags: tagType[];
  ogSiteName?: string;
  ogDescription?: string;
  hexCode?: string;
  isPreviewAvailable: boolean;
}

export interface CurrentBookmarkDataType {
  data: BookmarkDataType;
  isAllRequiredDataAvailable: boolean;
  isUpdated: boolean;
}

export interface BookmarkInitialDataType {
  currentBookmark: CurrentBookmarkDataType;
  bookmarkCollection: BookmarkDataType[] | [];
}

export type BookmarkDispatchActionType = {
  type:
    | "set-current-bookmark-img"
    | "set-current-bookmark-title"
    | "set-current-bookmark-description"
    | "set-current-bookmark-url"
    | "set-current-bookmark-tags"
    | "set-current-bookmark-site-name"
    | "set-current-bookmark-color"
    | "add-to-bookmark-collection";

  payload: string | number | boolean | tagType[] | BookmarkDataType[];
};

export interface BookmarkContextDataType extends BookmarkInitialDataType {
  bookmarkDispatch: React.Dispatch<BookmarkDispatchActionType>;
}
