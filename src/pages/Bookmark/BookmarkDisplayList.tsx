import { BookBookmark } from "phosphor-react";
import BookmarkViewCard from "./components/BookmarkView";
import { BookmarkDataType } from "../../Context/types";
import { StyledBookmarkDisplayList } from "./style";
import NoDataState from "../../component/UI/NoDataState";
import Loader from "../../component/UI/Loader";

const BookmarkDisplayList = ({
  bookmarkData = [],
  isLoading,
}: {
  isLoading: boolean;
  bookmarkData: BookmarkDataType[];
}) => {
  if (isLoading) {
    return <Loader />;
  }

  if (!bookmarkData.length) {
    return (
      <NoDataState
        message="You don't have any bookmark yet."
        icon={<BookBookmark className="empty-bookmark-icon" />}
      />
    );
  }
  return (
    <StyledBookmarkDisplayList>
      {bookmarkData.map((d) => (
        <BookmarkViewCard key={d.id} {...d} id={d.id} />
      ))}
    </StyledBookmarkDisplayList>
  );
};

export default BookmarkDisplayList;
