import { useState } from "react";

import { Input } from "../../component/UI/Input";
import BookmarkInput from "../../component/Cards/BookmarkView/BookmarkAction/BookmarkInput";
import { StyledBookmarkCreate } from "./style";

import Loader from "../../component/UI/Loader";

import Back from "../../component/UI/Back";
import { PrimaryButton } from "../../component/UI/Button";
import { useCreateBookmark, useGenerateLinkPreviewData } from "./hook";
import { useBookmarkContext } from "../../Context/BookmarkDataProvider";
import { securedUrlRegex } from "../../utils";

const BookmarkCreate = () => {
  const { handleLinkData, previewQueryState } = useGenerateLinkPreviewData();
  const { currentBookmark } = useBookmarkContext();
  const { handleBookmarkCreation, bookmarkCreateQueryState } =
    useCreateBookmark();
  const [bookmarkUrl, setBookmarkUrl] = useState<string>("");

  return (
    <StyledBookmarkCreate>
      <div className="main-content-wrapper">
        <Back />
        <div className="main-content">
          <Back isMobile />
          <div className="create-bookmark-fields">
            <div className="create-bookmark-url-wrapper">
              <Input
                className="bookmark-url"
                type="url"
                placeholder="Enter url here.."
                name="bookmarkUrl"
                value={bookmarkUrl}
                onChangeHandler={({ bookmarkUrl }: { bookmarkUrl: string }) => {
                  setBookmarkUrl(bookmarkUrl);
                }}
              />
            </div>
            {bookmarkUrl &&
              previewQueryState.called &&
              (!previewQueryState.loading &&
              previewQueryState.data?.generatePreviewData ? (
                <>
                  <BookmarkInput
                    {...previewQueryState.data?.generatePreviewData}
                    tags={[]}
                  />
                  <PrimaryButton
                    label={
                      bookmarkCreateQueryState.loading
                        ? "Creating..."
                        : "Create bookmark"
                    }
                    disabled={bookmarkCreateQueryState.loading}
                    onClick={() => {
                      if (currentBookmark.data) {
                        handleBookmarkCreation();
                      }
                    }}
                  />
                </>
              ) : (
                <Loader />
              ))}

            {!previewQueryState.called && (
              <PrimaryButton
                label="Get preview data"
                disabled={!securedUrlRegex(bookmarkUrl)}
                onClick={() => {
                  if (bookmarkUrl) {
                    handleLinkData(bookmarkUrl);
                  }
                }}
              />
            )}
          </div>
        </div>
      </div>
    </StyledBookmarkCreate>
  );
};

export default BookmarkCreate;
