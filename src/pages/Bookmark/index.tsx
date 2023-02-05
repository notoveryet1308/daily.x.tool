import { Plus } from "phosphor-react";

import { StyledBookmarkPageWrapper } from "./style";
import BookmarkViewCard from "../../component/Cards/BookmarkView";
import MovableWrapper from "../../component/MovableWrapper";
import { CreateNavButton } from "../../component/UI/Button";
import { useBookmarkContext } from "../../Context/BookmarkDataProvider";

const Bookmark = () => {
  const { bookmarkCollection } = useBookmarkContext();
  return (
    <StyledBookmarkPageWrapper>
      <div className="main-content-wrapper">
        <div className="main-content">
          <div className="bookmark-filter-content"></div>
          <div className="bookmark-list-content">
            {bookmarkCollection.map((d) => (
              <BookmarkViewCard {...d} />
            ))}
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
