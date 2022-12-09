import { useEffect } from 'react';

import { StyledSelect } from './style';
import { dummyOptions } from './data';
import SelectInput from './SelectInput';
import RenderOptions from './RenderOptions';
import { selectProps } from './types';
import { useSearchSelect, useSelectData } from './hook';
import { filterFromArrays } from './utils';

const Select = ({
  name,
  values,
  onChange,
  btnLabel,
  isClearable,
  isCreatable,
  isSearchable = false,
  searchPlaceholder,
  onMenuOpen = () => {},
  options = dummyOptions,
}: selectProps) => {
  const {
    onClear,
    onSelect,
    isMenuOpen,
    allOptions,
    setMenuOpen,
    onInputClick,
    selectedValue,
    setAllOptions,
    setSelectedValue,
  } = useSelectData({ options, onChange, onMenuOpen, values, name });

  const { exactSearchFound, searchInput, onCreate, handleOnchange } =
    useSearchSelect({
      name,
      options,
      onChange,
      allOptions,
      selectedValue,
      setAllOptions,
      setSelectedValue,
      isSearchable: !!isSearchable || !!isCreatable,
    });

  useEffect(() => {
    const filterValues = filterFromArrays({
      allValues: allOptions,
      valuesToExclude: values,
    });
    setAllOptions(filterValues);
  }, []);

  return (
    <StyledSelect isSearchable={!!isSearchable || !!isCreatable}>
      <div className='select-top' onClick={onInputClick}>
        {selectedValue.length > 0 ? (
          <RenderOptions
            data={selectedValue}
            onClick={onClear}
            isClearable={isClearable}
            showDropdownIndicationIcon
          />
        ) : (
          <SelectInput placeholder={btnLabel || 'Select tags'} type='button' />
        )}
      </div>
      {isMenuOpen && (
        <div className='select-menu-wrapper'>
          {(isCreatable || isSearchable) && (
            <div className='select-search'>
              <SelectInput
                type='text'
                stopPropagation
                onChange={handleOnchange}
                showDropdownIndication={false}
                placeholder={searchPlaceholder || 'Search and select'}
                onFocus={() => setMenuOpen(true)}
                value={searchInput}
              />
            </div>
          )}
          <RenderOptions
            isClickable
            showMenuMessage={!isCreatable}
            data={allOptions}
            onClick={onSelect}
            className='render-options'
            isCreatable={!exactSearchFound && isCreatable}
            searchInput={searchInput}
            onCreate={onCreate}
          />
        </div>
      )}
    </StyledSelect>
  );
};

export default Select;
