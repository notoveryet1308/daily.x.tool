import React from 'react';
import noDataImg from '../../../assets/no_data.svg';
import { StyledNoDataWrapper } from './style';

const NoDataState = ({
  message,
  img = noDataImg,
}: {
  message?: string;
  img: string;
}) => {
  return (
    <StyledNoDataWrapper>
      <img src={img} />
      <span className='nodata-message'>{message}</span>
    </StyledNoDataWrapper>
  );
};

export default NoDataState;
