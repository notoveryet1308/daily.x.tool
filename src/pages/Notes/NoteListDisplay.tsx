import NoteView from '../../component/Cards/NoteView';
import MasonryGridLayout from '../../component/UI/MasonaryGridLayout';
import { NoteDataType } from '../../Context/types';

import no_data_img from '../../assets/no_data.svg';
import NoDataState from '../../component/UI/NoDataState';

const NoteListDisplay = ({ data }: { data: NoteDataType[] | [] }) => {
  if (!data.length) {
    return (
      <NoDataState
        img={no_data_img}
        message='No notes available.'
        className='notes-empty-state'
      />
    );
  }
  return (
    <MasonryGridLayout minWidth={300}>
      {data.map((d) => (
        <div className='masonry-brick' key={d.id}>
          <NoteView {...d} className='masonry-content' />
        </div>
      ))}
    </MasonryGridLayout>
  );
};

export default NoteListDisplay;
