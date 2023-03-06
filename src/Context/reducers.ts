import { nanoid } from "nanoid";

import {
  currentNoteInitialValue,
  NoteFilterInitialData,
} from "./initialValues";

import {
  InitialNoteValueType,
  NoteDispatchActionType,
  BookmarkDispatchActionType,
  BookmarkInitialDataType,
  NoteDataType,
} from "./types";

const isAllRequiredFieldsAvailable = ({
  type,
  values,
}: {
  type: "or" | "and";
  values: boolean[];
}): boolean => {
  let isAvailable = false;

  if (type === "or" && values.includes(true)) {
    isAvailable = true;
  }

  if (type === "and" && !values.includes(false)) {
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

export const bookmarkReducer = (
  state: BookmarkInitialDataType,
  action: BookmarkDispatchActionType
): BookmarkInitialDataType => {
  const { type, payload } = action;
  const { currentBookmark } = state;

  if (type === "set-current-bookmark-title" && typeof payload === "string") {
    return {
      ...state,
      currentBookmark: {
        ...currentBookmark,
        data: { ...currentBookmark.data, ogTitle: payload },
      },
    };
  }

  if (
    type === "set-current-bookmark-description" &&
    typeof payload === "string"
  ) {
    return {
      ...state,
      currentBookmark: {
        ...currentBookmark,
        data: { ...currentBookmark.data, ogDescription: payload },
      },
    };
  }

  if (type === "set-current-bookmark-img" && typeof payload === "string") {
    return {
      ...state,
      currentBookmark: {
        ...currentBookmark,
        data: { ...currentBookmark.data, ogImg: payload },
      },
    };
  }

  if (type === "set-current-bookmark-tags") {
    return {
      ...state,
      currentBookmark: {
        ...currentBookmark,
        data: { ...currentBookmark.data, tags: payload },
      },
    };
  }

  if (
    type === "set-current-bookmark-site-name" &&
    typeof payload === "string"
  ) {
    return {
      ...state,
      currentBookmark: {
        ...currentBookmark,
        data: { ...currentBookmark.data, ogSiteName: payload },
      },
    };
  }

  if (type === "set-current-bookmark-url" && typeof payload === "string") {
    return {
      ...state,
      currentBookmark: {
        ...currentBookmark,
        data: { ...currentBookmark.data, ogUrl: payload },
      },
    };
  }

  if (type === "set-current-bookmark-color" && typeof payload === "string") {
    return {
      ...state,
      currentBookmark: {
        ...currentBookmark,
        data: { ...currentBookmark.data, hexCode: payload },
      },
    };
  }

  if (type === "add-to-bookmark-collection") {
    localStorage.setItem("local-bookmark", JSON.stringify(payload));
    return {
      ...state,
      bookmarkCollection: payload,
    };
  }

  return { ...state };
};

export const noteReducer = (
  state: InitialNoteValueType,
  action: NoteDispatchActionType
): InitialNoteValueType => {
  const { type, payload } = action;
  const { currentNote } = state;
  const { data } = currentNote;

  if (type === "update-note-search") {
    return {
      ...state,
      noteSearch: payload,
    };
  }

  if (type === "reset-note-search") {
    return {
      ...state,
      noteSearch: "",
    };
  }

  if (type === "set-current-note-title" && typeof payload === "string") {
    return {
      ...state,
      currentNote: {
        ...currentNote,
        data: {
          ...data,
          title: payload,
        },
        isAllRequiredDataAvailable: isAllRequiredFieldsAvailable({
          type: "or",
          values: [!!payload, !!data.description],
        }),
      },
    };
  }

  if (type === "set-current-note-description" && typeof payload === "string") {
    return {
      ...state,
      currentNote: {
        ...currentNote,
        data: {
          ...data,
          description: payload,
        },
        isAllRequiredDataAvailable: isAllRequiredFieldsAvailable({
          type: "or",
          values: [!!payload, !!data.title],
        }),
      },
    };
  }

  if (type === "set-current-note-tags" && Array.isArray(payload)) {
    return {
      ...state,
      currentNote: {
        ...currentNote,
        data: { ...data, tags: payload },
        isAllRequiredDataAvailable: isAllRequiredFieldsAvailable({
          type: "or",
          values: [!!data.title, !!data.description],
        }),
      },
    };
  }

  if (type === "set-current-note-color-hex" && typeof payload === "string") {
    return {
      ...state,
      currentNote: {
        ...currentNote,
        data: { ...data, hexCode: payload },
        isAllRequiredDataAvailable: isAllRequiredFieldsAvailable({
          type: "or",
          values: [!!data.title, !!data.description],
        }),
      },
    };
  }

  if (type === "set-note-editing-status" && typeof payload === "boolean") {
    return { ...state, isEditing: payload };
  }

  if (type === "reset-current-note") {
    return { ...state, currentNote: { ...currentNoteInitialValue } };
  }

  if (
    type === "update-isPinned-status" &&
    !Array.isArray(payload) &&
    typeof payload === "object"
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
  if (type === "add-to-note-collection" && Array.isArray(payload)) {
    localStorage.setItem("local-notes", JSON.stringify(payload));
    return {
      ...state,
      noteCollection: sortNotesByPinnedStatus([...payload]),
    };
  }

  if (type === "update-current-note") {
    return {
      ...state,
      currentNote: {
        ...currentNote,
        data: payload,
        isAllRequiredDataAvailable: true,
        isUpdated: true,
      },
    };
  }

  if (type === "update-note-filter") {
    return {
      ...state,
      noteFilter: payload,
    };
  }

  if (type === "reset-note-filter") {
    return {
      ...state,
      noteFilter: NoteFilterInitialData,
    };
  }

  return state;
};
