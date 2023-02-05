import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

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
