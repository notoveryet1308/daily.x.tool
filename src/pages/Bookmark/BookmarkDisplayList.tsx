import { BookBookmark } from "phosphor-react";
import BookmarkViewCard from "./components/BookmarkView";
import { BookmarkDataType, tagType } from "../../Context/types";
import { StyledBookmarkDisplayList } from "./style";
import NoDataState from "../../component/UI/NoDataState";
import Loader from "../../component/UI/Loader";

const filterData = ({
  sourceData,
  targetData,
}: {
  sourceData: BookmarkDataType[];
  targetData: string[];
}) => {
  return sourceData.filter((data) =>
    targetData.some((value) =>
      data.tags.map((tag) => tag.value).includes(value)
    )
  );
};

const BookmarkDisplayList = ({
  bookmarkData = [],
  isLoading,
  filterTagData,
}: {
  isLoading: boolean;
  bookmarkData: BookmarkDataType[];
  filterTagData: string[];
}) => {
  if (isLoading) {
    return <Loader />;
  }

  if (
    !bookmarkData.length ||
    (filterTagData.length > 0 &&
      filterData({
        sourceData: bookmarkData,
        targetData: filterTagData,
      }).length <= 0)
  ) {
    return (
      <NoDataState
        message={
          filterTagData.length > 0
            ? "No bookmark found with selected filter"
            : "You don't have any bookmark yet."
        }
        icon={<BookBookmark className="empty-bookmark-icon" />}
      />
    );
  }
  return (
    <StyledBookmarkDisplayList>
      {filterTagData.length > 0
        ? filterData({
            sourceData: bookmarkData,
            targetData: filterTagData,
          }).map((d) => <BookmarkViewCard key={d.id} {...d} id={d.id} />)
        : bookmarkData.map((d) => (
            <BookmarkViewCard key={d.id} {...d} id={d.id} />
          ))}
    </StyledBookmarkDisplayList>
  );
};

export default BookmarkDisplayList;
