import { useMutation, useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";
import gql from "graphql-tag";
import { nanoid } from "nanoid";

import { useBookmarkContext } from "../../Context/BookmarkDataProvider";
import { isUserAuthenticated } from "../../utils";

const GENERATE_LINK_PREVIEW_DATA = gql`
  mutation GenerateLinkData($input: GenerateLinkPreviewData!) {
    generatePreviewData(input: $input) {
      ogImg
      ogUrl
      ogTitle
      ogSiteName
      ogDescription
    }
  }
`;

export const useGenerateLinkPreviewData = () => {
  const [mutate, previewQueryState] = useMutation(GENERATE_LINK_PREVIEW_DATA);

  const handleLinkData = (url: string) => {
    mutate({
      variables: {
        input: {
          url,
        },
      },
    });
  };

  return { previewQueryState, handleLinkData };
};

const CREATE_BOOKMARK = gql`
  mutation CreateBookmark($input: CreateBookmarkInput!) {
    createBookmark(input: $input) {
      id
      ogTitle
      ogImg
      ogDescription
      ogUrl
      ogSiteName
      tags {
        id
        value
        label
      }
      hexCode
    }
  }
`;

export const useCreateBookmark = () => {
  const history = useHistory();
  const { bookmarkDispatch, bookmarkCollection, currentBookmark } =
    useBookmarkContext();
  const [mutate, bookmarkCreateQueryState] = useMutation(CREATE_BOOKMARK, {
    update(cache, { data: { createBookmark } }) {
      const existingNote = cache.readQuery({
        query: GET_BOOKMARK,
      });
      cache.writeQuery({
        query: GET_BOOKMARK,
        data: {
          getBookmark: [...existingNote?.getBookmark, createBookmark],
        },
      });
    },
  });
  const userLogged = isUserAuthenticated();

  if (bookmarkCreateQueryState.called && !bookmarkCreateQueryState.loading) {
    history.push("/bookmark");
  }

  const handleBookmarkCreation = () => {
    const id = nanoid();
    userLogged
      ? mutate({
          variables: {
            input: {
              ...currentBookmark.data,
              id,
            },
          },
          optimisticResponse: {
            __typename: "Mutation",
            createBookmark: {
              ...currentBookmark.data,
              id,
              __tynamename: "Bookmark",
            },
          },
        })
      : (function () {
          bookmarkDispatch({
            type: "add-to-bookmark-collection",
            payload: [
              { ...currentBookmark.data, id: nanoid() },
              ...bookmarkCollection,
            ],
          });
          history.push("/bookmark");
        })();
  };

  return { handleBookmarkCreation, bookmarkCreateQueryState };
};

const GET_BOOKMARK = gql`
  query GetBookmark {
    getBookmark {
      id
      ogTitle
      ogImg
      ogDescription
      ogUrl
      ogSiteName
      tags {
        id
        value
        label
      }
      hexCode
    }
  }
`;

export const useGetBookmarkData = () => {
  const bookmarkGetQuery = useQuery(GET_BOOKMARK);
  return bookmarkGetQuery;
};
