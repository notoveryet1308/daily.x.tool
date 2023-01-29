import NoteView from "../../component/Cards/NoteView";
import MasonryGridLayout from "../../component/UI/MasonaryGridLayout";
import { NoteDataType } from "../../Context/types";

import no_data_img from "../../assets/no_data.svg";
import NoDataState from "../../component/UI/NoDataState";
import Loader from "../../component/UI/Loader";

const NoteListDisplay = ({
  data,
  queryState,
}: {
  data: NoteDataType[] | [];
  queryState: { isLoading: Boolean; error?: string };
}) => {
  if (queryState.isLoading) {
    return <Loader />;
  }
  if (!queryState.isLoading && !data.length) {
    return (
      <NoDataState
        img={no_data_img}
        message="No notes available."
        className="notes-empty-state"
      />
    );
  }
  return (
    <MasonryGridLayout minWidth={400}>
      {data.length &&
        data.map((d) => (
          <div className="masonry-brick" key={d.id}>
            <NoteView {...d} className="masonry-content" />
          </div>
        ))}
    </MasonryGridLayout>
  );
};

export default NoteListDisplay;
