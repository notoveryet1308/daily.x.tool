import gql from "graphql-tag";

export const CREATE_BOOKMARK = gql`
  mutation CREATE_BOOKMARK_DATA($input: GenerateLinkPreviewData!) {
    generatePreviewData(input: $input) {
      ogImg
      ogUrl
      ogTitle
      ogSiteName
      ogDescription
      ogType
      ogIcon
      isPreviewAvailable
      createdAt
      updatedAt
    }
  }
`;

export const GET_ALL_BOOKMARK = gql`
  query GET_ALL_BOOKMARK {
    getBookmark {
      id
      ogImg
      ogUrl
      ogTitle
      ogSiteName
      ogDescription
      ogType
      ogIcon
      isPreviewAvailable
      hexCode
      createdAt
      updatedAt
      tags{
        id
        value
        label
      }
    }
  }
`;

export const UPDATE_BOOKMARK = gql`
  mutation UPDATE_BOOKMARK($input: UpdateBookmarkInput!) {
    updateBookmark(input: $input) {
      id
      ogImg
      ogUrl
      ogTitle
      ogSiteName
      ogDescription
      ogType
      ogIcon
      isPreviewAvailable
      hexCode
      createdAt
      updatedAt
      tags{
        id
        value
        label
      }
    }
  }
`;

export const DELETE_BOOKMARK = gql`
  mutation DeleteBookmark($input: DeleteBookmarkInput!) {
    deleteBookmark(input: $input)
  }
`;
