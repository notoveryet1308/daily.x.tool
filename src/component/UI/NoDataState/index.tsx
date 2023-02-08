import React from "react";
import noDataImg from "../../../assets/no_data.svg";
import { StyledNoDataWrapper } from "./style";

const NoDataState = ({
  message,
  img = noDataImg,
  className,
  icon,
}: {
  message?: string;
  img?: string;
  className?: string;
  icon?: React.ReactNode;
}) => {
  return (
    <StyledNoDataWrapper className={`no-data-state ${className}`}>
      {!icon ? <img src={img} /> : icon}
      <span className="nodata-message">{message}</span>
    </StyledNoDataWrapper>
  );
};

export default NoDataState;
