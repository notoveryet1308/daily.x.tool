import { useState } from "react";
import { useHistory } from "react-router-dom";

import { Input } from "../../component/UI/Input";
import { StyledBookmarkCreate } from "./style";

import { PrimaryButton, TertiaryButton } from "../../component/UI/Button";

import { securedUrlRegex } from "../../utils";
import { useCreateBookmark } from "./Graphql/index";
import { nanoid } from "nanoid";
import Shell from "./components/Shell";

const BookmarkCreate = ({ onClose }: { onClose: Function }) => {
  const [bookmarkUrl, setBookmarkUrl] = useState<string>("");
  const { handleBookmarkCreation, createBookmarkQuery } = useCreateBookmark();

  if (createBookmarkQuery.data) {
    onClose();
  }

  return (
    <StyledBookmarkCreate>
      <div className="bookmark-url-wrapper">
        <Input
          className="bookmark-url"
          type="url"
          placeholder="Paste url here"
          name="bookmarkUrl"
          value={bookmarkUrl}
          onChangeHandler={({ bookmarkUrl }: { bookmarkUrl: string }) => {
            setBookmarkUrl(bookmarkUrl);
          }}
          showValidUrlMessage
        />
      </div>

      <div className="bookmark-create-action">
        <TertiaryButton label="Cancel" onClick={onClose} />
        <PrimaryButton
          label={createBookmarkQuery.loading ? "Bookmarking.." : "Bookmark"}
          disabled={!securedUrlRegex(bookmarkUrl)}
          onClick={() => {
            handleBookmarkCreation({ id: nanoid(), bookmarkUrl });
          }}
        />
      </div>
    </StyledBookmarkCreate>
  );
};

export { BookmarkCreate };

const BookmarkCreateShell = () => {
  const history = useHistory();

  const toggleShell = () => {
    history.push("/bookmark");
  };

  return (
    <>
      <Shell open toggleShell={toggleShell} title="Create bookmark">
        <BookmarkCreate onClose={toggleShell} />
      </Shell>
    </>
  );
};

export default BookmarkCreateShell;
