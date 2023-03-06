import BookmarkViewCard from "../../component/Cards/BookmarkView";
import { BookmarkDataType } from "../../Context/types";
import { StyledBookmarkDisplayList } from "./style";

const BookmarkDisplayList = ({
  bookmarkData,
}: {
  bookmarkData: BookmarkDataType[];
}) => {
  return (
    <StyledBookmarkDisplayList>
      {bookmarkData.map((d) => (
        <BookmarkViewCard {...d} />
      ))}
    </StyledBookmarkDisplayList>
  );
};

export default BookmarkDisplayList;
