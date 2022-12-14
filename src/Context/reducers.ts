import { nanoid } from 'nanoid';
import { currentNoteInitialValue } from './initialValues';
import { InitialValueType, DispatchActionType, NoteDataType } from './types';

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

const sortNotesByPinnedStatus = (data: NoteDataType[]) => {
  let noteAllData: NoteDataType[] = [];

  data.forEach((d) => {
    if (d.isPinned) {
      noteAllData.unshift(d);
    } else {
      noteAllData.push(d);
    }
  });

  return noteAllData;
};

export const noteReducer = (
  state: InitialValueType,
  action: DispatchActionType
): InitialValueType => {
  const { type, payload } = action;
  const { currentNote } = state;
  const { data } = currentNote;
  const isAvailable = isAllRequiredFieldsAvailable({
    type: 'or',
    values: [!!payload, !!data.description],
  });
  if (type === 'set-current-note-title' && typeof payload === 'string') {
    return {
      ...state,
      currentNote: {
        ...currentNote,
        data: {
          ...data,
          id: nanoid(),
          createdOn: Date.now(),
          title: payload,
        },
        isAllRequiredDataAvailable: isAvailable,
      },
    };
  }

  if (type === 'set-current-note-description' && typeof payload === 'string') {
    return {
      ...state,
      currentNote: {
        ...currentNote,
        data: {
          ...data,
          id: nanoid(),
          createdOn: Date.now(),
          description: payload,
        },
        isAllRequiredDataAvailable: isAvailable,
      },
    };
  }

  if (type === 'set-current-note-tags' && Array.isArray(payload)) {
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
  if (
    type === 'update-isPinned-status' &&
    !Array.isArray(payload) &&
    typeof payload === 'object'
  ) {
    const { id, isPinned } = payload;
    const findIndex = state.noteCollection.findIndex((d) => d.id === id);
    const noteArr = state.noteCollection.filter((d) => d.id === id);

    if (findIndex >= 0 && noteArr[0]) {
      noteArr[0].isPinned = isPinned;

      return {
        ...state,
        noteCollection: sortNotesByPinnedStatus(state.noteCollection),
      };
    }

    return state;
  }
  if (type === 'add-to-note-collection' && Array.isArray(payload)) {
    return {
      ...state,
      noteCollection: sortNotesByPinnedStatus([...payload]),
    };
  }

  return state;
};
