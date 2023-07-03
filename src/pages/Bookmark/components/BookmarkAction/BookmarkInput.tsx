import { useEffect } from "react";

import Select from "../../../../component/UI/Select";
import { StyledBookmarkInput } from "./style";
import { tagType } from "../../../../Context/types";
import ColorPicker from "../../../../component/UI/ColorPicker";
// import { useBookmarkInputData } from "../BookmarkView/hook";
import { useGetTags, useCreateTag } from "../../../../CommonGQL/hooks";
import { Input, TextArea } from "../../../../component/UI/Input";

import Shell from "../Shell";
import { TertiaryButton, PrimaryButton } from "../../../../component/UI/Button";
import { useUpdateBookmark } from "./hooks";
import { BookmarkInputField } from "../../type";
import Loader from "../../../../component/UI/Loader";

interface BookmarkInputPropType extends BookmarkInputField {
  toggleShell: Function;
}

const BookmarkInput = ({
  id,
  ogTitle,
  ogDescription,
  ogImg,
  tags = [],
  ogSiteName,
  hexCode,
  ogUrl,
  toggleShell,
}: BookmarkInputPropType) => {
  const { handleCreateTag } = useCreateTag();
  const {
    handleBookmarkUpdate,
    updateBookmark,
    allowUpdateAction,
    onBookmarkDataChange,
    updateBookmarkQuery,
  } = useUpdateBookmark({ id });
  const tagQuery = useGetTags();

  const onUpdateBookmark = () => {
    if (allowUpdateAction) {
      handleBookmarkUpdate(updateBookmark);
    }
  };

  useEffect(() => {
    if (updateBookmarkQuery.data) {
      toggleShell();
    }
  }, [updateBookmarkQuery.data]);

  return (
    <StyledBookmarkInput>
      <div className="input-field-wrapper">
        {tagQuery.loading ? (
          <Loader />
        ) : (
          <Select
            btnLabel="Choose tags"
            name="tags"
            isClearable
            isSearchable
            isCreatable
            options={tagQuery?.data?.getTag || []}
            values={tags}
            onChange={({ field, tags }: { field: string; tags: tagType[] }) =>
              onBookmarkDataChange({ field, value: tags })
            }
            onCreation={handleCreateTag}
            creationQueryState={{
              loading: tagQuery.loading,
              error: `${tagQuery.error}`,
            }}
          />
        )}
        <Input
          name="ogTitle"
          label="Title"
          placeholder="Enter bookmark title"
          type="text"
          value={ogTitle}
          onChangeHandler={({
            field,
            ogTitle,
          }: {
            field: string;
            ogTitle: string;
          }) => onBookmarkDataChange({ field, value: ogTitle })}
        />
        <Input
          name="ogSiteName"
          label="Site name"
          placeholder="Enter site name"
          type="text"
          value={ogSiteName}
          onChangeHandler={({
            field,
            ogSiteName,
          }: {
            field: string;
            ogSiteName: string;
          }) => onBookmarkDataChange({ field, value: ogSiteName })}
        />
        <TextArea
          name="ogDescription"
          label="Description"
          placeholder="Enter bookmark description"
          onChange={({
            field,
            ogDescription,
          }: {
            field: string;
            ogDescription: string;
          }) => onBookmarkDataChange({ field, value: ogDescription })}
          value={ogDescription || ""}
          minHeight={100}
        />
        <Input
          name="ogImg"
          label="Image url"
          placeholder="Enter bookmark image url"
          type="url"
          value={ogImg}
          onChangeHandler={({
            field,
            ogImg,
          }: {
            field: string;
            ogImg: string;
          }) => onBookmarkDataChange({ field, value: ogImg })}
        />
        <Input
          name="ogUrl"
          label="Bookmark url"
          placeholder="Enter bookmark url"
          type="url"
          value={ogUrl}
          onChangeHandler={({
            field,
            ogUrl,
          }: {
            field: string;
            ogUrl: string;
          }) => onBookmarkDataChange({ field, value: ogUrl })}
        />
        <ColorPicker
          name="hexCode"
          value={hexCode || "#772C92"}
          onChange={({ field, hexCode }: { field: string; hexCode: string }) =>
            onBookmarkDataChange({ field, value: hexCode })
          }
        />
      </div>
      <div className="create-bookmark-option">
        <TertiaryButton onClick={toggleShell} label="Cancel" />
        <PrimaryButton
          onClick={onUpdateBookmark}
          disabled={!allowUpdateAction}
          label={
            updateBookmarkQuery.loading
              ? "Updating bookmark..."
              : "Update bookmark"
          }
        />
      </div>
    </StyledBookmarkInput>
  );
};

export { BookmarkInput };

const BookmarkInputShell = ({
  open,
  toggleShell,
  dataProps,
}: {
  open: boolean;
  toggleShell: Function;
  dataProps: BookmarkInputPropType;
}) => {
  return (
    <Shell open={open} title="Update bookmark" toggleShell={toggleShell}>
      <BookmarkInput {...dataProps} toggleShell={toggleShell} />
    </Shell>
  );
};

export default BookmarkInputShell;
