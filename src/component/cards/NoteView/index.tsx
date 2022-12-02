import { PencilLine } from 'phosphor-react';

import Tags from './../../Tags';
import { StyledNoteView } from './style';
import { RichTextReadOnly } from '../../UI/RichTextEditor';
import { getDateFormat } from '../../TodoItem/utils';

const milliseconds = 60000;

const NoteView = ({
  id,
  colorHex,
  title,
  description,
  tags,
  isPinned = true,
  createdOn,
}: {
  id: string;
  colorHex: string;
  title: string;
  description?: string;
  tags?: string[];
  isPinned?: boolean;
  createdOn: number;
}) => {
  const isAddedJustNow = (Date.now() - createdOn) / milliseconds <= 1;

  return (
    <StyledNoteView
      colorHex={colorHex}
      className='note-view-card'
      showAnimation={isAddedJustNow}
    >
      <div className='top-wrapper'>
        <h2 className='note-view-title'>{title}</h2>
        {description && <RichTextReadOnly value={JSON.parse(description)} />}
        <div className='note-view-tags'>
          {tags?.map((d, index) => (
            <Tags value={d} colorHex={colorHex} key={`${id}${index}`} />
          ))}
        </div>
      </div>
      <span className='note-created-on'>{getDateFormat(createdOn)}</span>

      <PencilLine className='edit-icon' />
      {isPinned ? <div className='note-view-pinned'></div> : null}
    </StyledNoteView>
  );
};

export default NoteView;
