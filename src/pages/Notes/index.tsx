import Scrollbars from 'react-custom-scrollbars-2';

import { NotesData } from './notes.data';
import { StyledNotesPageWrapper } from './style';
import NoteView from '../../component/Cards/NoteView';
import NoteListDisplay from './NoteListDisplay';

export const Notes = () => {
  return (
    <StyledNotesPageWrapper>
      <div className='main-content-wrapper'>
        <div className='main-content'>
          <div className='note-filter'></div>
          <Scrollbars autoHeightMax='100%' autoHide>
            <NoteListDisplay data={NotesData} />
          </Scrollbars>
        </div>
      </div>
    </StyledNotesPageWrapper>
  );
};

export default Notes;
