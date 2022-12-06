import { useState, useCallback } from 'react';
import { useNoteContext } from '../../Context/NoteDataProvider';

import { Input } from '../UI/Input';
import RichTextInput from '../UI/RichTextEditor';

import CreatableSelect from '../UI/Select';
import { useNoteDataHandler } from './hooks';

import { StyledCreateNoteDetail } from './style';

const dummyOptions = [
  { label: 'one', value: 'One' },
  { label: 'two', value: 'Two' },
  { label: 'three', value: 'Three' },
  { label: 'four', value: 'four' },
  { label: 'five', value: 'five' },
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
      <CreatableSelect
        isMulti
        options={dummyOptions}
        className='main-input-tag-select'
      />
    </StyledCreateNoteDetail>
  );
};

export default CreateNoteDetails;
