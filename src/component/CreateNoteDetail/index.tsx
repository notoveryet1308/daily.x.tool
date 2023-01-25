import { useHistory } from 'react-router-dom';

import { useNoteContext } from '../../Context/NoteDataProvider';
import { PrimaryButton } from '../UI/Button';
import ColorPicker from '../UI/ColorPicker';
import { Input } from '../UI/Input';
import RichTextInput from '../UI/RichTextEditor';

import Select from '../UI/Select';
import { useNoteDataHandler } from './hooks';

import { StyledCreateNoteDetail } from './style';

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
      <Input
        type='text'
        name='noteTitle'
        placeholder='Title'
        onChangeHandler={noteDataHandler}
        value={currentNote.data.title}
        className='main-input-form-title'
      />
      <RichTextInput
        maxHeight={400}
        minHeight={200}
        autoFocus={false}
        name='noteDescription'
        onChange={noteDataHandler}
        placeholder='Note description'
        className='create-note-description'
      />
      <Select
        isCreatable
        name='noteTags'
        options={dummyOptions}
        onChange={noteDataHandler}
        values={currentNote.data.tags}
        searchPlaceholder='Search tags'
      />
      <ColorPicker name='noteColor' onChange={noteDataHandler} />
      <PrimaryButton
        onClick={() => {
          if(currentNote.isAllRequiredDataAvailable){
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
