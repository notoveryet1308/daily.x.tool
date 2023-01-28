import { nanoid } from 'nanoid';

import Tag from '../../Tags';
import { StyledRenderOption } from './style';
import { optionType } from './types';
import { CaretDown } from 'phosphor-react';

const RenderOptions = ({
  data,
  onClick,
  className,
  onCreate,
  isClickable,
  isClearable,
  isCreatable,
  searchInput,
  showMenuMessage,
  showDropdownIndicationIcon,
}: {
  onCreate?: Function;
  onClick: Function;
  data: optionType[];
  className?: string;
  searchInput?: string;
  isClearable?: boolean;
  isClickable?: boolean;
  isCreatable?: boolean;
  showMenuMessage?: boolean;
  showDropdownIndicationIcon?: boolean;
}) => {
  return (
    <StyledRenderOption className={`select-render-option ${className}`}>
      {data.length > 0 && (
        <div className='render-option-list'>
          {data.map(({ label, id, value }) => (
            <Tag
              id={id}
              key={id}
              value={value}
              label={label}
              onClick={onClick}
              hexCode='#7C63CF'
              isClickable={isClickable}
              isClearable={isClearable}
            />
          ))}
        </div>
      )}
      {showDropdownIndicationIcon && (
        <CaretDown className='caret-down-icon ph-icon' />
      )}
      {data.length <= 0 && showMenuMessage && !searchInput && (
        <span className='empty-menu-option-message'>
          No more here but you can create new option.
        </span>
      )}
      {isCreatable && searchInput && (
        <div className='create-search-tag'>
          <span className='create-search-label'>Create &rarr;</span>
          <Tag
            isClickable
            id={nanoid()}
            onClick={onCreate}
            label={searchInput}
            value={searchInput.split(' ').join('').toLowerCase()}
          />
        </div>
      )}
    </StyledRenderOption>
  );
};

export default RenderOptions;
