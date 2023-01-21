import { useState } from 'react';
import { Plus } from 'phosphor-react';

import { StyledNotesPageWrapper } from './style';
import { CreateButton } from '../../component/UI/Button';
import Modal from '../../component/UI/Modal';
import CreateNoteDetails from '../../component/CreateNoteDetail';
import { useNoteContext } from '../../Context/NoteDataProvider';
import NoteListDisplay from './NoteListDisplay';
import { isUserAuthenticated } from '../../utils';
import { useCreateNote } from '../../component/CreateNoteDetail/gql-query';
import { useNoteData } from './hook';

export const Notes = () => {
  const {
    currentNote,
    noteCollection,
    getNoteQuery,
    noteDispatch,
    handleCreateNote,
    userLogged,
  } = useNoteData();
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    noteDispatch({ type: 'reset-current-note', payload: '' });
  };
  
  const onOkHandler = () => {
    if (currentNote.isAllRequiredDataAvailable) {
     

      const userLogged = isUserAuthenticated();
      userLogged
        ? handleCreateNote(currentNote.data)
        : noteDispatch({
            type: 'add-to-note-collection',
            payload: [currentNote.data, ...noteCollection],
          });
      toggleModal();
    }
  };

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
          <div className='create-note-btn-wrapper'>
            <CreateButton
              label='Create'
              onClick={toggleModal}
              className='create-note-btn'
              icon={<Plus className='plus-icon' weight='fill' />}
            />
          </div>
          <Modal
            open={isOpen}
            onClose={toggleModal}
            onOk={onOkHandler}
            title='Create note'
            width={600}
            align='top'
            okBtnLabel='Add'
          >
            <CreateNoteDetails />
          </Modal>
        </div>
      </div>
    </StyledNotesPageWrapper>
  );
};

export default Notes;
