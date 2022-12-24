import { PencilLine, Trash } from 'phosphor-react';

import Tags from '../../Tags';
import { StyledNoteView } from './style';
import { RichTextReadOnly } from '../../UI/RichTextEditor';
import { getDateFormat } from '../../TodoItem/utils';
import { useNoteContext } from '../../../Context/NoteDataProvider';
import {tagType} from '../../../Context/types'

const milliseconds = 165481;

const NoteView = ({
  id,
  colorHex,
  title,
  description,
  tags,
  isPinned = true,
  createdOn,
  className,
}: {
  id: string;
  colorHex: string;
  title: string;
  description?: string;
  tags?: tagType[];
  isPinned?: boolean;
  createdOn: number;
  className?: string;
}) => {
  const isAddedJustNow = Date.now() - createdOn < milliseconds;

  const { noteDispatch } = useNoteContext();

  return (
    <StyledNoteView
      colorHex={colorHex}
      className={`note-view-card ${className}`}
      showAnimation={isAddedJustNow}
      onDoubleClick={() =>
        noteDispatch({
          type: 'update-isPinned-status',
          payload: { id, isPinned: !isPinned },
        })
      }
    >
      <div className='top-wrapper'>
        <h2 className='note-view-title'>{title}</h2>
        {description && <RichTextReadOnly value={JSON.parse(description)} className="show-border-left"/>}
        <div className='note-view-tags'>
          {tags?.map((d, index) => (
            <Tags
              id={d.id}
              value={d.value}
              label={d.label}
              colorHex={colorHex}
              key={`${id}${index}`}
            />
          ))}
        </div>
      </div>
      <span className='note-created-on'>{getDateFormat(createdOn)}</span>
      <div className='action-btn-wrapper'>
        <PencilLine className='edit-icon ph-icon' />
        <Trash className='trash-icon ph-icon' />
      </div>
      {isPinned ? <div className='note-view-pinned'></div> : null}
    </StyledNoteView>
  );
};

export default NoteView;
