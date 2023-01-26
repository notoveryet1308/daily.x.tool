import { PencilLine, Trash } from 'phosphor-react';

import Tags from '../../Tags';
import { StyledNoteView } from './style';
import { RichTextReadOnly } from '../../UI/RichTextEditor';
import { getDateFormat } from '../../TodoItem/utils';
import { useNoteContext } from '../../../Context/NoteDataProvider';

import { useState } from 'react';
import NoteDisplay from './NoteDisplay';
import { NotePropsType } from './type';
import NoteEdit from './NoteEdit'

const milliseconds = 165481;

const NoteView = (props: NotePropsType) => {
  const { createdOn, hexCode, className, id, isPinned } = props;
  const [isEditing, setEditing] = useState(false);
  const isAddedJustNow = Date.now() - createdOn < milliseconds;
  const { noteDispatch, isEditing: inEditMode } = useNoteContext();

  const toggleIsEditing = () => {
    setEditing(!isEditing);
    noteDispatch({type:'reset-current-note', payload:''});
    noteDispatch({type:'set-note-editing-status', payload: !isEditing})
  };

  return (
    <StyledNoteView
      hexCode={hexCode}
      className={`note-view-card ${className}`}
      showAnimation={isAddedJustNow}
      editMode={isEditing}
      isEditing={inEditMode}
      onDoubleClick={() =>
        noteDispatch({
          type: 'update-isPinned-status',
          payload: { id, isPinned: !isPinned },
        })
      }
    >
      {!isEditing ? (
        <NoteDisplay {...props} toggleIsEditing={toggleIsEditing} isEditMode={inEditMode}/>
      ) : (
        <NoteEdit {...props} toggleIsEditing={toggleIsEditing}/>
      )}
    </StyledNoteView>
  );
};

export default NoteView;
