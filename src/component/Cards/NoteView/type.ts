import { tagType } from '../../../Context/types';

export type NotePropsType = {
  id: string;
  hexCode: string;
  title: string;
  description: string;
  tags?: tagType[];
  isPinned: boolean;
  createdOn: number;
  updatedOn: number;
  className?: string;
  isPreview?: boolean;
};


export type NoteEditPropsType = {
  id: string;
  hexCode: string;
  title: string;
  description: string;
  tags?: tagType[];
  isPinned: boolean;
  createdOn: number;
  updatedOn: number;
  toggleIsEditing: Function;
}