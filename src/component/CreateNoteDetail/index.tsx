import { useHistory } from 'react-router-dom';

import { useNoteContext } from '../../Context/NoteDataProvider';
import { PrimaryButton } from '../UI/Button';
import { useNoteDataHandler } from './hooks';

import { StyledCreateNoteDetail } from './style';
import InputFields from './InputFields';

const dummyOptions = [
  { label: 'Javascript', value: 'javascript', id: 'Javascript-xx21' },
  { label: 'Css', value: 'css', id: 'css-dce3' },
  { label: 'HTML', value: 'html', id: 'html-908bg' },
  { label: 'React', value: 'react', id: 'react-vco0p' },
];

const CreateNoteDetails = ({
  className,
  onAddHandler,
}: {
  className?: string;
  onAddHandler: Function;
}) => {
  const navigate = useHistory();
  const { currentNote } = useNoteContext();

  const { noteDataHandler } = useNoteDataHandler();

  return (
    <StyledCreateNoteDetail className={className}>
      <InputFields
        currentNote={currentNote}
        noteDataHandler={noteDataHandler}
        tagOptions={dummyOptions}
      />
      <PrimaryButton
        onClick={() => {
          if (currentNote.isAllRequiredDataAvailable) {
            onAddHandler();
            navigate.goBack();
          }
        }}
        label='Add'
        disabled={!currentNote.isAllRequiredDataAvailable}
      />
    </StyledCreateNoteDetail>
  );
};

export default CreateNoteDetails;
