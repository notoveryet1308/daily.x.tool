import { StaticColors } from '../theme/constants';
import { currentNoteDataType } from './types';
import { nanoid } from 'nanoid';

export const currentNoteInitialValue: currentNoteDataType = {
  data: {
    id: nanoid(), //not-user dependent
    tags: [],
    title: '',
    hexCode: StaticColors[0],
    description: '',
    isPinned: false, //not-user dependent
    createdOn: Date.now(), //not-user dependent
    updatedOn: Date.now(),
  },
  isAllRequiredDataAvailable: false,
  isUpdated: false,
};
