import Select from "../../../UI/Select";
import { Input, TextArea } from "../../../UI/Input";
import { StyledBookmarkInput } from "./style";
import { tagType } from "../../../../Context/types";
import ColorPicker from "../../../UI/ColorPicker";
import { useBookmarkInputData } from "../hook";
import { useGetTags, useCreateTag } from "../../../../CommonGQL/hooks";

type BookmarkInputPropType = {
  id: string;
  ogImg?: string;
  ogTitle?: string;
  ogUrl?: string;
  tags: tagType[];
  ogSiteName?: string;
  ogDescription?: string;
  hexCode: string;
};

const BookmarkInput = ({
  ogTitle,
  ogDescription,
  ogImg,
  tags,
  ogSiteName,
  hexCode,
  ogUrl,
}: BookmarkInputPropType) => {
  const { handleBookmarkData } = useBookmarkInputData();
  const { handleCreateTag } = useCreateTag();
  const tagQuery = useGetTags();

  return (
    <StyledBookmarkInput>
      <Input
        name="bookmarkTitle"
        label="Title"
        placeholder="Enter bookmark title"
        type="text"
        value={ogTitle}
        onChangeHandler={handleBookmarkData}
      />
      <Input
        name="bookmarkSiteName"
        label="Site name"
        placeholder="Enter site name"
        type="text"
        value={ogSiteName}
        onChangeHandler={handleBookmarkData}
      />
      <TextArea
        name="bookmarkDescription"
        label="Description"
        placeholder="Enter bookmark description"
        onChange={handleBookmarkData}
        value={ogDescription || ""}
        minHeight={100}
      />
      <Input
        name="bookmarkImgUrl"
        label="Image url"
        placeholder="Enter bookmark image url"
        type="url"
        value={ogImg}
        onChangeHandler={handleBookmarkData}
      />
      <Input
        name="bookmarkUrl"
        label="Bookmark url"
        placeholder="Enter bookmark url"
        type="url"
        value={ogUrl}
        onChangeHandler={handleBookmarkData}
      />
      <ColorPicker
        name="bookmarkColor"
        value={hexCode}
        onChange={handleBookmarkData}
      />
      <Select
        btnLabel="Choose tags"
        name="bookmarkTags"
        isClearable
        isSearchable
        isCreatable
        options={tagQuery?.data?.getTag || []}
        values={tags}
        onChange={handleBookmarkData}
        onCreation={handleCreateTag}
        creationQueryState={{
          loading: tagQuery.loading,
          error: `${tagQuery.error}`,
        }}
      />
    </StyledBookmarkInput>
  );
};

export default BookmarkInput;
