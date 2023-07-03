import { useMutation, useQuery } from "@apollo/client";
import { CREATE_BOOKMARK, GET_ALL_BOOKMARK, UPDATE_BOOKMARK } from "./gql";
import { BookmarkInputField } from "../type";

export const useCreateBookmark = () => {
  const [mutate, createBookmarkQuery] = useMutation(CREATE_BOOKMARK, {
    update(cache, { data: { generatePreviewData } }) {
      const existingBookmark = cache.readQuery({
        query: GET_ALL_BOOKMARK,
      });
      console.log(existingBookmark, generatePreviewData);

      cache.writeQuery({
        query: GET_ALL_BOOKMARK,
        data: {
          getBookmark: [generatePreviewData, ...existingBookmark?.getBookmark],
        },
      });
    },
  });

  const handleBookmarkCreation = ({
    id,
    bookmarkUrl,
  }: {
    id: string;
    bookmarkUrl: string;
  }) => {
    mutate({
      variables: {
        input: {
          id,
          url: bookmarkUrl,
        },
      },
    });
  };

  return { handleBookmarkCreation, createBookmarkQuery };
};

export const useUpdateBookmarkQuery = () => {
  const [mutate, updateBookmarkQuery] = useMutation(UPDATE_BOOKMARK);

  const handleBookmarkUpdate = (data: BookmarkInputField) => {
    mutate({
      variables: {
        input: {
          ...data,
          updatedAt: Date.now(),
        },
      },
    });
  };

  return { handleBookmarkUpdate, updateBookmarkQuery };
};

export const useGetAllBookmarks = () => {
  const bookmarkQuery = useQuery(GET_ALL_BOOKMARK);
  return bookmarkQuery;
};
