import { useState } from 'react';
import { Plus } from 'phosphor-react';

import { StyledNotesPageWrapper } from './style';
import { CreateButton } from '../../component/UI/Button';
import Modal from '../../component/UI/Modal';
import CreateNoteDetails from '../../component/CreateNoteDetail';
import { useNoteContext } from '../../Context/NoteDataProvider';
import NoteListDisplay from './NoteListDisplay';



export const Notes = () => {
  const { noteCollection, noteDispatch, currentNote } = useNoteContext();
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    noteDispatch({ type: 'reset-current-note', payload: '' });
  };

  const onOkHandler = () => {
    if (currentNote.isAllRequiredDataAvailable) {
      noteDispatch({
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
            <NoteListDisplay data={noteCollection} />
          </div>
          {/* <MovableWrapper> */}
          <div className='create-note-btn-wrapper'>
            <CreateButton
              label='Create'
              onClick={toggleModal}
              className='create-note-btn'
              icon={<Plus className='plus-icon' weight='fill' />}
            />
          </div>
          {/* </MovableWrapper> */}
          <Modal
            open={isOpen}
            onClose={toggleModal}
            onOk={onOkHandler}
            title='Create note'
            width={600}
            align='top'
          >
            <CreateNoteDetails />
          </Modal>
        </div>
      </div>
    </StyledNotesPageWrapper>
  );
};

export default Notes;
