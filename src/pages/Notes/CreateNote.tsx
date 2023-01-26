import CreateNoteDetails from '../../component/CreateNoteDetail';
import { StyledCreateNotePageWrapper } from './style';
import { useNoteData } from './hook';
import { PrimaryButton } from '../../component/UI/Button';
import NoteView from '../../component/Cards/NoteView';
import Back from '../../component/UI/Back';

const CreateNote = () => {
  const {
    currentNote,
    noteCollection,
    noteDispatch,
    handleCreateNote,
    userLogged,
  } = useNoteData();

  const onClickHandler = () => {
    if (currentNote.isAllRequiredDataAvailable) {
      userLogged
        ? handleCreateNote(currentNote.data)
        : noteDispatch({
            type: 'add-to-note-collection',
            payload: [currentNote.data, ...noteCollection],
          });

      noteDispatch({ type: 'reset-current-note', payload: '' });
    }
  };
  return (
    <StyledCreateNotePageWrapper>
      <div className='main-content-wrapper'>
        <Back />
        <div className='main-content'>
          <Back isMobile/>
          <div className='create-note-fields'>
            <CreateNoteDetails
              className='create-note-inputs'
              onAddHandler={onClickHandler}
            />
          </div>
          <div className='create-note-preview'>
            <NoteView {...currentNote.data} className='create-note' isPreview />
          </div>
        </div>
      </div>
    </StyledCreateNotePageWrapper>
  );
};

export default CreateNote;
