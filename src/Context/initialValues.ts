import { StaticColors } from '../theme/constants';
import { currentNoteDataType } from './types';

export const currentNoteInitialValue: currentNoteDataType = {
  data: {
    id: '', //not-user dependent
    tags: [],
    title: '',
    hexCode: StaticColors[0],
    description: '',
    isPinned: false, //not-user dependent
    createdOn: 0, //not-user dependent
    updatedOn: 0,
  },
  isAllRequiredDataAvailable: false,
};
