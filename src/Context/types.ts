export type appDataType = {
  themeMode: 'main' | 'dark';
  isUserAuthenticated: boolean;
};

export type appDataAction = {
  type: 'change-themeMode' | 'user-auth';
  payload: string | boolean;
};

export interface appDataContextType extends appDataType {
  dispatch: React.Dispatch<appDataAction>;
}

export interface TodoCollectionType {
  id: string;
  duration?: number;
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

export interface NoteDataType {
  id: string;
  title: string;
  tags: string[];
  colorHex: string;
  createdOn: number;
  isPinned?: boolean;
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
    | 'set-current-note-title'
    | 'set-current-note-tags'
    | 'set-current-note-description'
    | 'set-current-note-color-hex'
    | 'set-current-note-auto-value'
    | 'add-to-note-collection'
    | 'reset-current-note';
  payload: string | number | boolean | string[] | NoteDataType[];
};

export interface NoteContextDataType extends InitialValueType {
  noteDispatch: React.Dispatch<DispatchActionType>;
}
