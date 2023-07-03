import { useImmer } from "use-immer";
import { tagType } from "../../../../Context/types";
import { useCheckRequiredValue } from "../../../../hooks";
import { useUpdateBookmarkQuery } from "../../Graphql";

export const useUpdateBookmark = ({ id }: { id: string }) => {
  const [updateBookmark, setUpdateBookmark] = useImmer({
    id,
    ogImg: "",
    ogTitle: "",
    ogUrl: "",
    tags: [],
    ogSiteName: "",
    ogDescription: "",
    hexCode: "",
  });
  const { handleBookmarkUpdate, updateBookmarkQuery } =
    useUpdateBookmarkQuery();
  const [allowUpdateAction] = useCheckRequiredValue({
    type: "and",
    values: [!!updateBookmark.ogTitle, !!updateBookmark.ogDescription],
  });

  const onBookmarkDataChange = ({
    field,
    value,
  }: {
    field: string;
    value: string | tagType[];
  }) => {
    setUpdateBookmark((data) => {
      data[field] = value;
    });
  };

  return {
    handleBookmarkUpdate,
    onBookmarkDataChange,
    updateBookmarkQuery,
    updateBookmark,
    allowUpdateAction,
  };
};
