import { useGetTags } from "../../../component/CreateNoteDetail/gql-query";
import { useNoteContext } from "../../../Context/NoteDataProvider";
import Select from "../../../component/UI/Select";
import Loader from "../../../component/UI/Loader";
import { isUserAuthenticated } from "../../../utils";

import { StyledNoteTagFilter } from "./style";

const NoteTagFilter = ({ onDataChange }: { onDataChange: Function }) => {
  const { noteFilter } = useNoteContext();
  const tagQuery = useGetTags();
  const logged = isUserAuthenticated();

  return (
    <StyledNoteTagFilter>
      <span className="note-tag-label"> Tag </span>
      {logged && tagQuery.loading ? (
        <Loader />
      ) : (
        <Select
          name="noteTags"
          options={tagQuery.data?.getTag}
          btnLabel="Choose tag"
          values={noteFilter.noteTags}
          onChange={onDataChange}
          isClearable
          isSearchable={false}
          creationQueryState={{
            loading: tagQuery.loading,
            error: `${tagQuery.error}`,
          }}
        />
      )}
    </StyledNoteTagFilter>
  );
};

export default NoteTagFilter;
