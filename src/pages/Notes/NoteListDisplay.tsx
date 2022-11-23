import { useId } from 'react';
import NoteView from '../../component/cards/NoteView';
import { StyledNoteListDisplay } from './style';
import { breakpoints } from '../../theme/breakpoint';
import { useScreenWidth } from '../../hooks';

const partitionData = ({
  partitionCount,
  data,
}: {
  partitionCount: number;
  data: {
    title: string;
    tags?: string[];
    colorHex: string;
    id: string;
    description?: string;
  }[];
}) => {
  const partitionedData: {
    title: string;
    tags?: string[];
    colorHex: string;
    id: string;
    description?: string;
  }[][] = Array.from({
    length: partitionCount,
  });

  let counter = 0;
  for (let i = 0; i <= data.length; i++) {
    if (counter < partitionCount && data[i]) {
      if (!partitionedData[counter]) {
        partitionedData[counter] = [data[i]];
      } else {
        partitionedData[counter] = [...partitionedData[counter], data[i]];
      }
      counter = counter + 1;
    }

    if (data.length > counter && counter >= partitionCount) {
      counter = 0;
    }
  }
  return partitionedData;
};

const NoteListDisplay = ({
  data,
}: {
  data: {
    title: string;
    tags?: string[];
    colorHex: string;
    id: string;
    description?: string;
  }[];
}) => {
  const [screenWidth] = useScreenWidth();
  const [row1, row2, row3] = partitionData({
    partitionCount: screenWidth <= breakpoints.LARGE_TABLET ? 2 : 3,
    data,
  });

  return (
    <StyledNoteListDisplay>
      {row1 && (
        <div className='row-1'>
          {row1.map(({ title, id, colorHex, description, tags }) => (
            <NoteView
              title={title}
              key={id + useId()}
              colorHex={colorHex}
              description={description}
              tags={tags}
            />
          ))}
        </div>
      )}
      {row2 && (
        <div className='row-2'>
          {row2.map(({ title, id, colorHex, description, tags }) => (
            <NoteView
              title={title}
              key={id + useId()}
              colorHex={colorHex}
              description={description}
              tags={tags}
            />
          ))}
        </div>
      )}
      {row3 && (
        <div className='row-3'>
          {row3.map(({ title, id, colorHex, description, tags }) => (
            <NoteView
              title={title}
              key={id + useId()}
              colorHex={colorHex}
              description={description}
              tags={tags}
            />
          ))}
        </div>
      )}
    </StyledNoteListDisplay>
  );
};

export default NoteListDisplay;
