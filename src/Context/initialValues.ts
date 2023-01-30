import { StaticColors } from "../theme/constants";
import { currentNoteDataType, NoteFilterDataType } from "./types";

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
