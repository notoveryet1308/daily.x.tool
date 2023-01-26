import { useState } from 'react';
import { Plus } from 'phosphor-react';

import { StyledNotesPageWrapper } from './style';
import { CreateNavButton } from '../../component/UI/Button';
import Modal from '../../component/UI/Modal';
import CreateNoteDetails from '../../component/CreateNoteDetail';
import NoteListDisplay from './NoteListDisplay';
import { isUserAuthenticated } from '../../utils';
import { useNoteData } from './hook';
import MovableWrapper from '../../component/MovableWrapper';

export const Notes = () => {
  const {
    noteCollection,
    getNoteQuery,
    noteDispatch,
    userLogged,
  } = useNoteData();

  return (
    <StyledNotesPageWrapper>
      <div className='main-content-wrapper'>
        <div className='main-content'>
          <div className='note-filter'></div>
          <div className='note-list-wrapper'>
            <NoteListDisplay
              data={
                userLogged ? getNoteQuery.data?.getNote || [] : noteCollection
              }
              queryState={{
                isLoading: getNoteQuery.loading,
                error: getNoteQuery.error?.message || '',
              }}
            />
          </div>
          <MovableWrapper className='create-note-btn-wrapper'>
            <CreateNavButton
              label='Create'
              className='create-note-btn'
              icon={<Plus className='plus-icon' weight='fill' />}
              to='/notes/create'
            />
          </MovableWrapper>
        </div>
      </div>
    </StyledNotesPageWrapper>
  );
};

export default Notes;
