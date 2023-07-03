import { Plus } from "phosphor-react";

import { StyledBookmarkPageWrapper } from "./style";
import MovableWrapper from "../../component/MovableWrapper";
import { CreateNavButton } from "../../component/UI/Button";
import { useGetAllBookmarks } from "./Graphql/";
import BookmarkDisplayList from "./BookmarkDisplayList";

const Bookmark = () => {
  const bookmarkGetQuery = useGetAllBookmarks();
  return (
    <StyledBookmarkPageWrapper>
      <div className="main-content-wrapper">
        <div className="main-content">
          <div className="bookmark-filter-content"></div>
          <div className="bookmark-list-content">
            <BookmarkDisplayList
              bookmarkData={bookmarkGetQuery.data?.getBookmark}
              isLoading={bookmarkGetQuery.loading}
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
