import React, { useState, useCallback, useEffect } from 'react';
import { _debounce } from '../../../utils';
import { StyledInput, StyledUserInputWrapper } from './style';
import { InputProps } from './types';

const Input = ({
  value,
  type,
  placeholder = 'Input here',
  label,
  onChange,
  bordered = true,
  name,
  optional,
  onBlur,
  disabled,
  className,
  wrapperClassName,
}: InputProps) => {
  const [userInput, setUserInput] = useState(value);

  const inputChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      e.preventDefault();
      setUserInput(e.target.value);
      // _debounce({
      //   func: () => {
      //     onChange({ [name]: e.target.value });
      //   },
      //   delay: 500,
      // });
      onChange({ [name]: e.target.value });
    },
    [userInput]
  );
  useEffect(() => {
    setUserInput(value);
  }, [value]);

  return (
    <StyledUserInputWrapper className={wrapperClassName}>
      {label && (
        <p className='user-input-label' title={label}>
          {label}
          {optional && <span className='optional-field'>(Optional)</span>}
        </p>
      )}
      <StyledInput
        type={type}
        value={userInput}
        onChange={inputChangeHandler}
        placeholder={placeholder}
        bordered={bordered}
        name={name}
        onBlur={onBlur}
        disabled={disabled}
        className={className}
      />
    </StyledUserInputWrapper>
  );
};

export default Input;
