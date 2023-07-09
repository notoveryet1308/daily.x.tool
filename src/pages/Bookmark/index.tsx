import { Plus } from "phosphor-react";

import { StyledBookmarkPageWrapper } from "./style";
import MovableWrapper from "../../component/MovableWrapper";
import { CreateNavButton } from "../../component/UI/Button";
import { useGetAllBookmarks } from "./Graphql/";
import BookmarkDisplayList from "./BookmarkDisplayList";
import TagSelectFilter from "../../component/TagSelectFilter";
import { useState } from "react";
import { tagType } from "../../Context/types";

const Bookmark = () => {
  const [selectedFilterTag, setSelectedFilterTag] = useState<string[]>([]);
  const bookmarkGetQuery = useGetAllBookmarks();

  const onBookmarkFilter = ({ filterTag }: { filterTag: tagType[] }) => {
    const tagValues = filterTag.map((tag) => tag.value);
    setSelectedFilterTag(tagValues);
  };

  return (
    <StyledBookmarkPageWrapper>
      <div className="main-content-wrapper">
        <div className="main-content">
          <div className="bookmark-filter-content">
            <TagSelectFilter
              onDataChange={onBookmarkFilter}
              selectLabel="Filter by tag"
              tagFilterName="bookmarkTagFilter"
              filterLabel=""
            />
          </div>
          <div className="bookmark-list-content">
            <BookmarkDisplayList
              bookmarkData={bookmarkGetQuery.data?.getBookmark}
              isLoading={bookmarkGetQuery.loading}
              filterTagData={selectedFilterTag}
            />
          </div>

          <MovableWrapper className="create-bookmark-btn-wrapper">
            <CreateNavButton
              label="Create"
              className="create-search-btn"
              icon={<Plus className="plus-icon" weight="fill" />}
              to="/bookmark/create"
            />
          </MovableWrapper>
        </div>
      </div>
    </StyledBookmarkPageWrapper>
  );
};

export default Bookmark;
