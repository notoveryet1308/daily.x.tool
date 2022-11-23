import React from 'react';
import { StyledTag } from './style';

const Tags = ({ value, colorHex }: { value: string; colorHex: string }) => {
  return (
    <StyledTag colorHex={colorHex} title={value}>
      {value}
    </StyledTag>
  );
};

export default Tags;
