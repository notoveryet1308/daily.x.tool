import React from "react";
import noDataImg from "../../../assets/no_data.svg";
import { StyledNoDataWrapper, StyledInlineNoDataFound } from "./style";

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

const InlineNoDataFound = ({
  icon,
  mainText,
  subText,
}: {
  icon?: React.ReactNode;
  mainText: string;
  subText: string;
}) => {
  return (
    <StyledInlineNoDataFound>
      <div className="inline-top">
        {icon && <span className="inline-top-icon">{icon}</span>}
        <h4 className="inline-top-main-text">{mainText}</h4>
      </div>
      <span className="inline-sub-text">{subText}</span>
    </StyledInlineNoDataFound>
  );
};

export default NoDataState;

export { InlineNoDataFound };
