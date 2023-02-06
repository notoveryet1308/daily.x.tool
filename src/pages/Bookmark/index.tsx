import { Plus, BookBookmark } from "phosphor-react";

import { StyledBookmarkPageWrapper } from "./style";
import BookmarkViewCard from "../../component/Cards/BookmarkView";
import MovableWrapper from "../../component/MovableWrapper";
import { CreateNavButton } from "../../component/UI/Button";
import { useBookmarkContext } from "../../Context/BookmarkDataProvider";
import { useGetBookmarkData } from "./hook";
import { isUserAuthenticated } from "../../utils";
import NoDataState from "../../component/UI/NoDataState";
import { BookmarkDataType } from "../../Context/types";
import Loader from "../../component/UI/Loader";

const ServeContent = ({
  isLoading,
  error,
  serverBookmarData,
  localBookmarkData,
}: {
  isLoading: boolean;
  error?: string;
  serverBookmarData: BookmarkDataType[] | null;
  localBookmarkData: BookmarkDataType[];
}) => {
  const userLogged = isUserAuthenticated();

  if (userLogged) {
    if (isLoading) {
      return <Loader />;
    }

    if (serverBookmarData && serverBookmarData.length) {
      return serverBookmarData.map((d) => <BookmarkViewCard {...d} />);
    } else {
      return (
        <NoDataState
          message="You don't have any bookmark"
          icon={<BookBookmark className="empty-bookmark-icon" />}
        />
      );
    }
  } else {
    if (localBookmarkData.length) {
      return localBookmarkData.map((d) => <BookmarkViewCard {...d} />);
    } else {
      return (
        <NoDataState
          message="You don't have any bookmark"
          icon={<BookBookmark className="empty-bookmark-icon" />}
        />
      );
    }
  }
};

const Bookmark = () => {
  const { bookmarkCollection } = useBookmarkContext();

  const bookmarkGetQuery = useGetBookmarkData();
  return (
    <StyledBookmarkPageWrapper>
      <div className="main-content-wrapper">
        <div className="main-content">
          <div className="bookmark-filter-content"></div>
          <div className="bookmark-list-content">
            {ServeContent({
              isLoading: bookmarkGetQuery.loading,
              error: `${bookmarkGetQuery.error}`,
              serverBookmarData: bookmarkGetQuery.data?.getBookmark,
              localBookmarkData: bookmarkCollection,
            })}
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
