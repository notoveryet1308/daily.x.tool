import React, { MouseEventHandler } from 'react';
import { StyledTag } from './style';
import { X } from 'phosphor-react';

const Tags = ({
  id,
  value,
  label,
  colorHex = '#293970',
  isClearable = false,
  isClickable = false,
  onClick,
}: {
  id: string;
  value: string;
  colorHex?: string;
  isClearable?: boolean;
  onClick?: Function;
  label?: string;
  isClickable?: boolean;
}) => {
  const onTagClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    const data = { value, label, id };
    onClick && onClick(data);
  };
  return (
    <StyledTag
      colorHex={colorHex}
      title={value}
      onClick={onTagClick}
      isClearable={isClearable || isClickable}
    >
      {value}
      {isClearable ? <X className='close-icon' /> : ''}
    </StyledTag>
  );
};

export default Tags;
