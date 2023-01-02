
export type userType = {
  _id: string;
  name: string;
  email: string;
}

export type appDataType = {
  themeMode: "main" | "dark";
  isUserAuthenticated: boolean;
  staticColors: string[];
  loggedInUserDetail: userType | null;
};

export type appDataAction = {
  type: "change-themeMode" | "user-auth" | "set-more-static-colors" | "reset-auth";
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
  colorHex: string;
  createdOn: number;
  isPinned: boolean;
  description: string;
}

export interface currentNoteDataType {
  data: NoteDataType;
  isAllRequiredDataAvailable: boolean;
}

export interface InitialValueType {
  currentNote: currentNoteDataType;
  noteCollection: NoteDataType[] | [];
}

export type DispatchActionType = {
  type:
    | "set-current-note-title"
    | "set-current-note-tags"
    | "set-current-note-description"
    | "set-current-note-color-hex"
    | "set-current-note-auto-value"
    | "add-to-note-collection"
    | "update-isPinned-status"
    | "reset-current-note";
  payload:
    | string
    | number
    | boolean
    | tagType[]
    | NoteDataType[]
    | { id: string; isPinned: boolean };
};

export interface NoteContextDataType extends InitialValueType {
  noteDispatch: React.Dispatch<DispatchActionType>;
}
