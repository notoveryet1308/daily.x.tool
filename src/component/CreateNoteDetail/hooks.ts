import { useCallback } from 'react';
import { useNoteContext } from '../../Context/NoteDataProvider';
import { tagType, NoteDataType } from '../../Context/types';

export const useNoteDataHandler = () => {
  const { noteDispatch } = useNoteContext();

  const noteDataHandler = useCallback(
    ({
      noteTitle,
      noteDescription,
      noteTags,
      noteColor,
      isPinned,
      field,
    }: {
      noteTitle?: string;
      noteDescription?: string;
      noteTags?: tagType[];
      noteColor?: string;
      isPinned?: boolean;
      field?: string;
    }) => {
      if (field === 'noteTitle') {
        noteDispatch({
          type: 'set-current-note-title',
          payload: noteTitle || '',
        });
      }

      if (field === 'noteDescription') {
        noteDispatch({
          type: 'set-current-note-description',
          payload: noteDescription || '',
        });
      }

      if (noteTags) {
        noteDispatch({ type: 'set-current-note-tags', payload: noteTags });
      }

      if (noteColor) {
        noteDispatch({
          type: 'set-current-note-color-hex',
          payload: noteColor,
        });
      }
    },
    []
  );

  const updateCurrentNote = ({
    id,
    title,
    description,
    tags,
    updatedOn,
    createdOn,
    isPinned,
    hexCode,
  }: NoteDataType) => {
    noteDispatch({
      type: 'update-current-note',
      payload: {
        id,
        title,
        description,
        tags,
        updatedOn,
        createdOn,
        isPinned,
        hexCode,
      },
    });
  };

  return { noteDataHandler, updateCurrentNote };
};
