import { gql, useMutation } from '@apollo/client';
import { useNoteContext } from '../../../Context/NoteDataProvider';
import { isUserAuthenticated } from '../../../utils';

import { DELETE_NOTE, UPDATE_NOTE } from './gql.type';

export const useUpdateNote = () => {
  const userLogged = isUserAuthenticated();
  const [updateMutate] = useMutation(UPDATE_NOTE);
  const { noteDispatch, noteCollection, currentNote } = useNoteContext();

  const handleNoteUpdate = () => {
    const updatedTimestamp = Date.now();
    userLogged
      ? updateMutate({
          variables: {
            input: {
              ...currentNote.data,
              updatedOn: updatedTimestamp,
            },
          },
          optimisticResponse: {
            __typename: 'Mutation',
            updateNote: {
              ...currentNote.data,
              updatedOn: updatedTimestamp,
              __typename: 'Note',
            },
          },
        })
      : noteDispatch({
          type: 'add-to-note-collection',
          payload: noteCollection.map((data) => {
            if (data.id === currentNote.data.id) {
              return { ...currentNote.data, updatedOn: Date.now() };
            }
            return data;
          }),
        });
  };

  return { handleNoteUpdate };
};

export const useDeleteNote = () => {
  const userLogged = isUserAuthenticated();
  const [deleteMutate] = useMutation(DELETE_NOTE, {
    update(cache, { data: { deleteNote } }) {
      cache.modify({
        fields: {
          getNote(existingTodo = [], { readField }) {},
        },
      });
    },
  });
  const { noteDispatch, noteCollection } = useNoteContext();

  const handleNoteDelete = ({ id }: { id: string }) => {
    userLogged
      ? deleteMutate({
          variables: {
            input: {
              id,
            },
          },
        })
      : noteDispatch({
          type: 'add-to-note-collection',
          payload: noteCollection.filter((data) => data.id !== id),
        });
  };

  return { handleNoteDelete };
};
