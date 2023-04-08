import React from "react";
import { StyledDivider } from "./style";

type DividerProps = {
  children?: React.ReactNode;
  className?: string;
  dashed?: boolean;
  style?: React.CSSProperties;
  type: "horizontal" | "vertical";
};

const Divider = ({
  children,
  className,
  type = "horizontal",
  ...rest
}: DividerProps) => {
  return (
    <StyledDivider className={className} type={type} {...rest}>
      {children || null}
    </StyledDivider>
  );
};

export default Divider;
