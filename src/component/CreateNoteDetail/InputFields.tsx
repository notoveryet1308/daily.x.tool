import { currentNoteDataType, tagType } from '../../Context/types';
import ColorPicker from '../UI/ColorPicker';
import { Input } from '../UI/Input';
import RichTextInput from '../UI/RichTextEditor';
import Select from '../UI/Select';

const InputFields = ({
  noteDataHandler,
  currentNote,
  tagOptions,
}: {
  noteDataHandler: Function;
  currentNote: currentNoteDataType;
  tagOptions: tagType[];
}) => {

  return (
    <>
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
        value={currentNote.data.description}
      />
      <Select
        isCreatable
        name='noteTags'
        options={tagOptions}
        onChange={noteDataHandler}
        values={currentNote.data.tags}
        searchPlaceholder='Search tags'
      />
      <ColorPicker name='noteColor' onChange={noteDataHandler} />
    </>
  );
};

export default InputFields;
