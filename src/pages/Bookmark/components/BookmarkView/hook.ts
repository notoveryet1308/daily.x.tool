import { useEffect, useState } from "react";

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
