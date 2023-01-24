import { PencilLine, Trash } from 'phosphor-react';

import Tags from '../../Tags';
import { StyledNoteView } from './style';
import { RichTextReadOnly } from '../../UI/RichTextEditor';
import { getDateFormat } from '../../TodoItem/utils';
import { useNoteContext } from '../../../Context/NoteDataProvider';
import { tagType } from '../../../Context/types';

const milliseconds = 165481;

const NoteView = ({
  id,
  hexCode,
  title,
  description,
  tags,
  isPinned,
  createdOn,
  className,
  isPreview = false,
}: {
  id: string;
  hexCode: string;
  title: string;
  description?: string;
  tags?: tagType[];
  isPinned?: boolean;
  createdOn: number;
  className?: string;
  isPreview?: boolean;
}) => {
  const isAddedJustNow = Date.now() - createdOn < milliseconds;

  const { noteDispatch } = useNoteContext();

  return (
    <StyledNoteView
      hexCode={hexCode}
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
        {title && <h2 className='note-view-title'>{title}</h2>}
        {!title && isPreview && <h2 className='note-preview-title'>title here...</h2>}
        {description && (
          <RichTextReadOnly
            value={JSON.parse(description)}
            className='show-border-left'
          />
        )}
        {tags && tags?.length > 0 && (
          <div className='note-view-tags'>
            {tags?.map((d, index) => (
              <Tags
                id={d.id}
                value={d.value}
                label={d.label}
                hexCode={hexCode}
                key={`${id}${index}`}
              />
            ))}
          </div>
        )}
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
