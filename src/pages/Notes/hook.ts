import { useCreateNote } from '../../component/CreateNoteDetail/gql-query';
import { useNoteContext } from '../../Context/NoteDataProvider';
import { isUserAuthenticated } from '../../utils';
import { useGetNotes } from './gql-query';

export const useNoteData = () => {
  const userLogged = isUserAuthenticated();
  const getNoteQuery = useGetNotes();
  const { handleCreateNote } = useCreateNote();
  const { noteCollection, noteDispatch, currentNote } = useNoteContext();

  return {
    getNoteQuery,
    handleCreateNote,
    currentNote,
    noteDispatch,
    noteCollection,
    userLogged
  };
};
