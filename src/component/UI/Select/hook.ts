import React, { useState, useEffect } from 'react';
import { optionType } from './types';
import { filterFromArrays } from './utils';

export const useSearchSelect = ({
  isSearchable,
  allOptions,
  setSelectedValue,
  selectedValue,
  setAllOptions,
  options,
  name,
  onChange,
}: {
  isSearchable: boolean;
  allOptions: optionType[];
  setSelectedValue: Function;
  selectedValue: optionType[];
  setAllOptions: Function;
  options: optionType[];
  name: string;
  onChange: Function;
}) => {
  const [exactSearchFound, setExactSearchFound] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>('');

  const handleOnchange = (inputValue: string) => {
    setSearchInput(inputValue);
  };

  const onCreate = (data: optionType) => {
    setSelectedValue([data, ...selectedValue]);
    onChange({ [name]: [data, ...selectedValue] });
    setSearchInput('');
  };

  useEffect(() => {
    if (isSearchable && searchInput) {
      const filteredSearch = allOptions.filter((d) => {
        if (d.label.toLowerCase() === searchInput.toLowerCase()) {
          setExactSearchFound(true);
        } else {
          setExactSearchFound(false);
        }

        if (d.label.toLowerCase().includes(searchInput.toLowerCase())) {
          return d;
        }
      });

      setAllOptions(filteredSearch);
    } else {
      setAllOptions(
        filterFromArrays({ allValues: options, valuesToExclude: selectedValue })
      );
    }
  }, [searchInput]);

  return { exactSearchFound, searchInput, onCreate, handleOnchange };
};

export const useSelectData = ({
  values,
  options,
  onMenuOpen,
  onChange,
  name,
}: {
  values: optionType[];
  options: optionType[];
  onMenuOpen?: Function;
  onChange: Function;
  name: string;
}) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<optionType[] | []>(
    values || []
  );
  const [allOptions, setAllOptions] = useState(options);

  const onInputClick = () => {
    onMenuOpen && onMenuOpen();
    setMenuOpen(!isMenuOpen);
  };

  const onSelect = (data: optionType) => {
    setSelectedValue([data, ...selectedValue]);
    setAllOptions([...allOptions.filter((d) => d.id !== data.id)]);
    onChange({ [name]: [data, ...selectedValue] });
  };

  const onClear = (data: optionType) => {
    const filteredValue = selectedValue.filter((d) => d.id !== data.id);
    setSelectedValue(filteredValue);
    setAllOptions([...allOptions, data]);
    onChange({ [name]: filteredValue });
  };

  return {
    onClear,
    onSelect,
    isMenuOpen,
    allOptions,
    setMenuOpen,
    onInputClick,
    selectedValue,
    setAllOptions,
    setSelectedValue,
  };
};
