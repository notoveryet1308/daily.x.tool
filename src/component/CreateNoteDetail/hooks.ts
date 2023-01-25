import { useCallback } from 'react';
import { useNoteContext } from '../../Context/NoteDataProvider';
import { tagType } from '../../Context/types';

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
      if (noteTitle) {
        noteDispatch({ type: 'set-current-note-title', payload: noteTitle });
      }
  
      if (field === "noteDescription") {
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

  return { noteDataHandler };
};
