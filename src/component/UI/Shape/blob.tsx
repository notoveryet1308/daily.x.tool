import { CSSProperties } from "react";

import { StyledBlobWrapper } from "./style";

const Blob = ({
  styles,
  className,
  isOutline,
}: {
  styles?: CSSProperties;
  className?: string;
  isOutline?: boolean;
}) => {
  return (
    <StyledBlobWrapper
      className={className}
      style={styles}
      isOutline={!!isOutline}
    ></StyledBlobWrapper>
  );
};

export default Blob;
