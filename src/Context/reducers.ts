import { nanoid } from 'nanoid';
import { currentNoteInitialValue } from './initialValues';
import {
  InitialValueType,
  DispatchActionType,
  NoteDataType,
  currentNoteDataType,
} from './types';

const isAllRequiredFieldsAvailable = ({
  type,
  values,
}: {
  type: 'or' | 'and';
  values: boolean[];
}): boolean => {
  let isAvailable = false;

  if (type === 'or' && values.includes(true)) {
    isAvailable = true;
  }

  if (type === 'and' && !values.includes(false)) {
    isAvailable = true;
  }

  return isAvailable;
};

export const noteReducer = (
  state: InitialValueType,
  action: DispatchActionType
): InitialValueType => {
  const { type, payload } = action;
  //   console.log({ type, payload });
  if (type === 'set-current-note-title' && typeof payload === 'string') {
    const { currentNote } = state;
    const { data } = currentNote;
    const isAvailable = isAllRequiredFieldsAvailable({
      type: 'or',
      values: [!!payload, !!data.description],
    });
    return {
      ...state,
      currentNote: {
        ...currentNote,
        data: {
          ...data,
          id: nanoid(),
          createdOn: Date.now(),
          isPinned: false,
          colorHex: '#D2D9EE',
          title: payload,
        },
        isAllRequiredDataAvailable: isAvailable,
      },
    };
  }

  if (type === 'set-current-note-description' && typeof payload === 'string') {
    const { currentNote } = state;
    const { data } = currentNote;
    const isAvailable = isAllRequiredFieldsAvailable({
      type: 'or',
      values: [!!data.title, !!payload],
    });
    console.log({ isAvailable, data });

    return {
      ...state,
      currentNote: {
        ...currentNote,
        data: {
          ...data,
          id: nanoid(),
          createdOn: Date.now(),
          isPinned: false,
          colorHex: '#D2D9EE',
          description: payload,
        },
        isAllRequiredDataAvailable: isAvailable,
      },
    };
  }

  if (type === 'set-current-note-tags' && Array.isArray(payload)) {
    const { currentNote } = state;
    const { data } = currentNote;
    const isAvailable = isAllRequiredFieldsAvailable({
      type: 'or',
      values: [!!data.title, !!data.description],
    });
    return {
      ...state,
      currentNote: {
        ...currentNote,
        data: { ...data, tags: payload },
        isAllRequiredDataAvailable: isAvailable,
      },
    };
  }

  if (type === 'set-current-note-color-hex' && typeof payload === 'string') {
    const { currentNote } = state;
    const { data } = currentNote;
    const isAvailable = isAllRequiredFieldsAvailable({
      type: 'or',
      values: [!!data.title, !!data.description],
    });
    return {
      ...state,
      currentNote: {
        ...currentNote,
        data: { ...data, colorHex: payload },
        isAllRequiredDataAvailable: isAvailable,
      },
    };
  }

  if (type === 'reset-current-note') {
    return { ...state, currentNote: { ...currentNoteInitialValue } };
  }
  if (type === 'add-to-note-collection' && Array.isArray(payload)) {
    return {
      ...state,
      noteCollection: payload,
    };
  }

  //   console.log({ state });

  return state;
};
