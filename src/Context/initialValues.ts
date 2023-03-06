import { StaticColors } from "../theme/constants";
import {
  currentNoteDataType,
  NoteFilterDataType,
  CurrentBookmarkDataType,
} from "./types";

export const currentNoteInitialValue: currentNoteDataType = {
  data: {
    id: "", //not-user dependent
    tags: [],
    title: "",
    hexCode: StaticColors[0],
    description: "",
    isPinned: false, //not-user dependent
    createdOn: Date.now(), //not-user dependent
    updatedOn: Date.now(),
  },
  isAllRequiredDataAvailable: false,
  isUpdated: false,
};

export const NoteFilterInitialData: NoteFilterDataType = {
  colors: [],
  noteTags: [],
};

export const CurrentBookmarkInitialValue: CurrentBookmarkDataType = {
  data: {
    id: "",
    ogDescription: "",
    ogTitle: "",
    ogSiteName: "",
    tags: [],
    hexCode: StaticColors[0],
    ogImg: "",
    ogUrl: "",
  },
  isAllRequiredDataAvailable: false,
  isUpdated: false,
};
