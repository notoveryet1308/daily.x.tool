import React, { createContext, useContext, useReducer } from 'react';
import { noteReducer } from './reducers';
import { InitialValueType, NoteContextDataType } from './types';
import { currentNoteInitialValue } from './initialValues';

const initialValues: InitialValueType = {
  currentNote: currentNoteInitialValue,
  noteCollection: [],
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
