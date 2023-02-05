import { StyledBookmarkPageWrapper } from "./style";
import BookmarkViewCard from "../../component/Cards/BookmarkView";

const Bookmark = () => {
  return (
    <StyledBookmarkPageWrapper>
      <div className="main-content-wrapper">
        <div className="main-content">
          <div className="bookmark-filter-content"></div>
          <div className="bookmark-list-content">
            <BookmarkViewCard />
            <BookmarkViewCard />
            <BookmarkViewCard />
            <BookmarkViewCard />
            <BookmarkViewCard />
            <BookmarkViewCard />
            <BookmarkViewCard />
            <BookmarkViewCard />
            <BookmarkViewCard />
            <BookmarkViewCard />
            <BookmarkViewCard />
            <BookmarkViewCard />
            <BookmarkViewCard />
            <BookmarkViewCard />
            <BookmarkViewCard />
            <BookmarkViewCard />
            <BookmarkViewCard />
            <BookmarkViewCard />
          </div>
        </div>
      </div>
    </StyledBookmarkPageWrapper>
  );
};

export default Bookmark;
