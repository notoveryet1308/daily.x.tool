import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

import { isUserAuthenticated } from "../../../utils";
import { useBookmarkContext } from "../../../Context/BookmarkDataProvider";
import { tagType } from "../../../Context/types";

export const useLinkCopy = () => {
  const [isLinkCopied, setLinkCopy] = useState(false);

  const copyLinkText = ({ url }: { url: string }) => {
    navigator.clipboard.writeText(url);
    setLinkCopy(true);
  };

  useEffect(() => {
    let copyIntervalId;
    if (isLinkCopied) {
      copyIntervalId = setInterval(() => {
        setLinkCopy(false);
      }, 4000);
    }

    if (!isLinkCopied && copyIntervalId) {
      clearInterval(copyIntervalId);
    }
  }, [isLinkCopied]);

  return { isLinkCopied, copyLinkText };
};

export const useBookmarkInputData = () => {
  const { bookmarkDispatch } = useBookmarkContext();

  const handleBookmarkData = ({
    bookmarkTitle,
    bookmarkSiteName,
    bookmarkDescription,
    bookmarkImgUrl,
    bookmarkColor,
    bookmarkTags,
    bookmarkUrl,
  }: {
    bookmarkTitle: string;
    bookmarkSiteName: string;
    bookmarkDescription: string;
    bookmarkImgUrl: string;
    bookmarkColor: string;
    bookmarkTags: tagType[];
    bookmarkUrl: string;
  }) => {
    if (bookmarkTitle) {
      bookmarkDispatch({
        type: "set-current-bookmark-title",
        payload: bookmarkTitle,
      });
    }

    if (bookmarkSiteName) {
      bookmarkDispatch({
        type: "set-current-bookmark-site-name",
        payload: bookmarkSiteName,
      });
    }

    if (bookmarkDescription) {
      bookmarkDispatch({
        type: "set-current-bookmark-description",
        payload: bookmarkDescription,
      });
    }

    if (bookmarkImgUrl) {
      bookmarkDispatch({
        type: "set-current-bookmark-img",
        payload: bookmarkImgUrl,
      });
    }

    if (bookmarkColor) {
      bookmarkDispatch({
        type: "set-current-bookmark-color",
        payload: bookmarkColor,
      });
    }

    if (bookmarkTags) {
      bookmarkDispatch({
        type: "set-current-bookmark-tags",
        payload: bookmarkTags,
      });
    }

    if (bookmarkUrl) {
      bookmarkDispatch({
        type: "set-current-bookmark-url",
        payload: bookmarkUrl,
      });
    }
  };

  return { handleBookmarkData };
};

const DELETE_BOOKMARK = gql`
  mutation DeleteBookmark($input: DeleteBookmarkInput!) {
    deleteBookmark(input: $input)
  }
`;

export const useDeleteBookmark = () => {
  const userLogged = isUserAuthenticated();
  const { bookmarkDispatch, bookmarkCollection } = useBookmarkContext();
  const [mutate, bookmarkDeleteQuery] = useMutation(DELETE_BOOKMARK, {
    update(cache, _) {
      cache.modify({
        fields: {
          getBookmark() {},
        },
      });
    },
  });

  const handleBookmarDeletion = (id: string) => {
    userLogged
      ? mutate({
          variables: {
            input: {
              id,
            },
          },
        })
      : bookmarkDispatch({
          type: "add-to-bookmark-collection",
          payload: bookmarkCollection.filter((d) => d.id !== id),
        });
  };

  return { bookmarkDeleteQuery, handleBookmarDeletion };
};
