import { useNoteContext } from '../../Context/NoteDataProvider';
import { useScreenWidth } from '../../hooks';
import ColorPicker from '../UI/ColorPicker';
import { breakpoints } from '../../theme/breakpoint';
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

const CreateNoteDetails = () => {
  const [screenWidth] = useScreenWidth();
  const { currentNote } = useNoteContext();

  const { noteDataHandler } = useNoteDataHandler();

  return (
    <StyledCreateNoteDetail>
      <Input
        type='text'
        name='noteTitle'
        placeholder='Title'
        onChange={noteDataHandler}
        value={currentNote.data.title}
        className='main-input-form-title'
      />
      <RichTextInput
        maxHeight={400}
        minHeight={screenWidth <= breakpoints.LARGE_MOBILE ? 300 : 200}
        autoFocus={false}
        name='noteDescription'
        onChange={noteDataHandler}
        placeholder='Note description'
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
    </StyledCreateNoteDetail>
  );
};

export default CreateNoteDetails;
