import { Input, TextArea } from "../../../UI/Input";
import BookmarkInput from "./BookmarkInput";
import { StyledBookmarkCreate } from "./style";

const BookmarkCreate = () => {
  return (
    <StyledBookmarkCreate>
      <Input type="url" name="bookmarkUrl" onChangeHandler={() => {}} />
      <BookmarkInput />
    </StyledBookmarkCreate>
  );
};

export default BookmarkCreate;
