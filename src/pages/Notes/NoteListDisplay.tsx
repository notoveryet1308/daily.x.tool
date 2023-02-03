import NoteView from "../../component/Cards/NoteView";
import MasonryGridLayout from "../../component/UI/MasonaryGridLayout";
import { NoteDataType } from "../../Context/types";

import no_data_img from "../../assets/no_data.svg";
import NoDataState from "../../component/UI/NoDataState";
import Loader from "../../component/UI/Loader";
import { useNoteContext } from "../../Context/NoteDataProvider";
import { NoteFilterDataType } from "../../Context/types";

const filterData = (
  data: NoteDataType[],
  { colors, noteTags }: NoteFilterDataType,
  searchValue: string
): NoteDataType[] => {
  const filteredNote = data
    .filter((d) => {
      if (!colors.length) {
        return d;
      }
      if (colors.includes(d.hexCode)) {
        return d;
      }
    })
    .filter((d) => {
      if (!noteTags.length) {
        return d;
      }
      const availableTagIds = d.tags.map((d) => d.id);
      const filterTagIds = noteTags.map((d) => d.id);
      if (
        noteTags.length > 0 &&
        filterTagIds.some((id) => availableTagIds.includes(id))
      ) {
        return d;
      }
    })
    .filter((d) => {
      if (!searchValue) {
        return d;
      }
      if (
        d.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
        d.description
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase())
      ) {
        return d;
      }
    });

  return filteredNote;
};

const NoteListDisplay = ({
  data,
  queryState,
}: {
  data: NoteDataType[] | [];
  queryState: { isLoading: Boolean; error?: string };
}) => {
  const { noteFilter, noteSearch } = useNoteContext();
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

  if (data.length > 0 && !filterData(data, noteFilter, noteSearch).length) {
    console.log("rrr");
    return (
      <NoDataState
        img={no_data_img}
        message="No notes found with applied filers."
        className="notes-empty-state"
      />
    );
  }
  return (
    <MasonryGridLayout minWidth={400}>
      {data.length > 0 &&
        filterData(data, noteFilter, noteSearch).map((d) => (
          <div className="masonry-brick" key={d.id}>
            <NoteView {...d} className="masonry-content" />
          </div>
        ))}
    </MasonryGridLayout>
  );
};

export default NoteListDisplay;
