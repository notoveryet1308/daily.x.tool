import { useNoteContext } from '../../Context/NoteDataProvider';

import { Input } from '../UI/Input';
import RichTextInput from '../UI/RichTextEditor';

import Select from '../UI/Select';
import { useNoteDataHandler } from './hooks';

import { StyledCreateNoteDetail } from './style';

const dummyOptions = [
  { label: 'one', value: 'One', id: '223' },
  { label: 'two', value: 'Two', id: '224' },
  { label: 'three', value: 'Three', id: '225' },
  { label: 'four', value: 'four', id: '226' },
  { label: 'five', value: 'five', id: '227' },
];

const CreateNoteDetails = () => {
  const { currentNote } = useNoteContext();

  const { noteDataHandler } = useNoteDataHandler();

  return (
    <StyledCreateNoteDetail>
      <Input
        name='noteTitle'
        value={currentNote.data.title}
        onChange={noteDataHandler}
        type='text'
        placeholder='Title'
        className='main-input-form-title'
      />
      <RichTextInput
        name='noteDescription'
        onChange={noteDataHandler}
        placeholder='Note description'
        maxHeight={300}
        autoFocus={false}      />
      <Select
        name='noteTags'
        isCreatable
        options={dummyOptions}
        values={currentNote.data.tags}
        searchPlaceholder='Search tags'
        onChange={noteDataHandler}
      />
    </StyledCreateNoteDetail>
  );
};

export default CreateNoteDetails;
