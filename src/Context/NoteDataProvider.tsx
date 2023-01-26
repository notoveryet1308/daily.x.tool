import React, { createContext, useContext, useReducer } from 'react';
import { noteReducer } from './reducers';
import { InitialNoteValueType, NoteContextDataType } from './types';
import { currentNoteInitialValue } from './initialValues';

const localStoredNotes = localStorage.getItem('local-notes');
const noteData = localStoredNotes ? JSON.parse(localStoredNotes) : [];

const initialValues: InitialNoteValueType = {
  currentNote: currentNoteInitialValue,
  noteCollection: noteData,
  isEditing: false,
};

export const NoteContext = createContext<NoteContextDataType>(
  initialValues as NoteContextDataType
);

const NoteContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [noteData, noteDispatch] = useReducer(noteReducer, initialValues);
  return (
    <NoteContext.Provider value={{ ...noteData, noteDispatch }}>
      {children}
    </NoteContext.Provider>
  );
};

export const useNoteContext = () => useContext(NoteContext);

export default NoteContextProvider;
