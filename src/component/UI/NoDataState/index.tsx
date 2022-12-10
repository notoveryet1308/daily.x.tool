import React from 'react';
import noDataImg from '../../../assets/no_data.svg';
import { StyledNoDataWrapper } from './style';

const NoDataState = ({
  message,
  img = noDataImg,
  className,
}: {
  message?: string;
  img: string;
  className?: string;
}) => {
  return (
    <StyledNoDataWrapper className={`no-data-state ${className}`}>
      <img src={img} />
      <span className='nodata-message'>{message}</span>
    </StyledNoDataWrapper>
  );
};

export default NoDataState;
