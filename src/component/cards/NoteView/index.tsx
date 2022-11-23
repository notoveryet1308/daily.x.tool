import { useId } from 'react';
import { Typography } from 'antd';
import { PencilLine } from 'phosphor-react';

import Tags from './../../Tags';
import { StyledNoteView } from './style';

const { Title, Paragraph } = Typography;

const NoteView = ({
  colorHex,
  title,
  description,
  tags,
  isPinned = true,
}: {
  colorHex: string;
  title: string;
  description?: string;
  tags?: string[];
  isPinned?: boolean;
}) => {
  return (
    <StyledNoteView colorHex={colorHex} className='note-view-card'>
      <Title level={2} className='note-view-title'>
        {title}
      </Title>
      <Paragraph className='note-view-description'>{description}</Paragraph>
      <div className='note-view-tags'>
        {tags?.map((d) => (
          <Tags value={d} colorHex={colorHex} key={useId()} />
        ))}
      </div>
      <PencilLine className='edit-icon' />
      {isPinned ? <div className='note-view-pinned'></div> : null}
    </StyledNoteView>
  );
};

export default NoteView;
