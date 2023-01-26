import { PencilLine, Trash } from 'phosphor-react';
import { Tooltip } from 'antd';

import Tags from '../../Tags';
import { RichTextReadOnly } from '../../UI/RichTextEditor';
import { getDateFormat } from '../../TodoItem/utils';
import { tagType } from '../../../Context/types';
import { useDeleteNote } from './hooks';

const NoteDisplay = ({
  title,
  isPreview,
  description,
  tags,
  hexCode,
  id,
  createdOn,
  toggleIsEditing,
  isPinned,
  isEditMode,
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
  toggleIsEditing: Function;
  isEditMode: boolean;
}) => {
  const { handleNoteDelete } = useDeleteNote();
  return (
    <>
      <div className='top-wrapper'>
        {title && <h2 className='note-view-title'>{title}</h2>}
        {!title && isPreview && (
          <h2 className='note-preview-title'>title here...</h2>
        )}
        {description && (
          <RichTextReadOnly
            value={JSON.parse(description)}
            className='show-border-left'
            placeholder='note description'
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
      {!isPreview && (
        <div className='action-btn-wrapper'>
          <Tooltip
            title={isEditMode && 'Currently, You are editing another note'}
          >
            <PencilLine
              className='edit-icon ph-icon'
              onClick={() => toggleIsEditing()}
            />
          </Tooltip>

          <Trash
            className='trash-icon ph-icon'
            onClick={() => handleNoteDelete({ id })}
          />
        </div>
      )}
      {!isPreview && isPinned ? <div className='note-view-pinned'></div> : null}
    </>
  );
};

export default NoteDisplay;
