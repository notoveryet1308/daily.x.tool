import NoteView from '../../component/cards/NoteView';
import { StyledNoteListDisplay } from './style';
import { breakpoints } from '../../theme/breakpoint';
import { useScreenWidth } from '../../hooks';
import { NoteDataType } from '../../Context/types';

const partitionData = ({
  partitionCount,
  data,
}: {
  partitionCount: number;
  data: NoteDataType[];
}) => {
  const partitionedData: NoteDataType[][] = Array.from({
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

const NoteListDisplay = ({ data }: { data: NoteDataType[] | [] }) => {
  const [screenWidth] = useScreenWidth();
  const [row1, row2, row3] = partitionData({
    partitionCount: screenWidth <= breakpoints.LARGE_TABLET ? 2 : 3,
    data,
  });

  return (
    <StyledNoteListDisplay>
      {row1 && (
        <div className='row-1'>
          {row1.map(
            ({
              title,
              id,
              colorHex,
              description,
              tags,
              createdOn,
              isPinned,
            }) => (
              <NoteView
                id={id}
                key={id}
                tags={tags}
                title={title}
                colorHex={colorHex}
                isPinned={isPinned}
                createdOn={createdOn}
                description={description}
              />
            )
          )}
        </div>
      )}
      {row2 && (
        <div className='row-2'>
          {row2.map(
            ({
              title,
              id,
              colorHex,
              description,
              tags,
              createdOn,
              isPinned,
            }) => (
              <NoteView
                id={id}
                key={id}
                tags={tags}
                title={title}
                colorHex={colorHex}
                isPinned={isPinned}
                createdOn={createdOn}
                description={description}
              />
            )
          )}
        </div>
      )}
      {row3 && (
        <div className='row-3'>
          {row3.map(
            ({
              title,
              id,
              colorHex,
              description,
              tags,
              createdOn,
              isPinned,
            }) => (
              <NoteView
                id={id}
                key={id}
                tags={tags}
                title={title}
                colorHex={colorHex}
                isPinned={isPinned}
                createdOn={createdOn}
                description={description}
              />
            )
          )}
        </div>
      )}
    </StyledNoteListDisplay>
  );
};

export default NoteListDisplay;
