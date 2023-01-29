import { useGetTags } from "../../../component/CreateNoteDetail/gql-query";

import Select from "../../../component/UI/Select";
import Loader from "../../../component/UI/Loader";
import { isUserAuthenticated } from "../../../utils";

import { StyledNoteTagFilter } from "./style";

const NoteTagFilter = () => {
  const tagQuery = useGetTags();
  const logged = isUserAuthenticated();

  console.log({ logged });

  return (
    <StyledNoteTagFilter>
      <span className="note-tag-label"> Tag </span>
      {logged ? (
        tagQuery.loading && <Loader />
      ) : (
        <Select
          name="noteTag"
          options={tagQuery.data?.getTag}
          btnLabel="Choose tag"
          values={[]}
          onChange={() => {}}
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
