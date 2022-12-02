import { currentNoteDataType } from './types';

export const currentNoteInitialValue: currentNoteDataType = {
  data: {
    id: '', //not-user dependent
    tags: [],
    title: '',
    colorHex: '',
    description: '',
    isPinned: false, //not-user dependent
    createdOn: 0, //not-user dependent
  },
  isAllRequiredDataAvailable: false,
};
