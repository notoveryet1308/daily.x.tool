import { useEffect, useState } from 'react';
import { StyledSelectInput } from './style';
import { CaretDown } from 'phosphor-react';

const SelectInput = ({
  type,
  onChange,
  placeholder,
  className,
  onFocus,
  value,
  stopPropagation = false,
  showDropdownIndication = true,
}: {
  value?: string;
  type: string;
  onChange?: Function;
  placeholder: string;
  className?: string;
  onFocus?: Function;
  stopPropagation?: boolean;
  showDropdownIndication?: boolean;
}) => {
  const [selectInputValue, setSelectInputValue] = useState<string>(value || '');
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectInputValue(e.target.value);
    onChange && onChange(e.target.value);
  };

  const onFocusHandler = (e: React.FocusEvent) => {
    onFocus && onFocus();
  };

  useEffect(() => {
    setSelectInputValue(value || '');
  }, [value]);

  return (
    <div className='select-input-wrapper'>
      <StyledSelectInput
        type={type}
        value={type === 'text' ? selectInputValue : placeholder}
        placeholder={placeholder}
        className={`select-input ${className}`}
        onChange={onChangeHandler}
        onFocus={onFocusHandler}
        onClick={(e) => stopPropagation && e.stopPropagation()}
      />
      {showDropdownIndication && (
        <CaretDown className='caret-down-icon ph-icon' />
      )}
    </div>
  );
};

export default SelectInput;
