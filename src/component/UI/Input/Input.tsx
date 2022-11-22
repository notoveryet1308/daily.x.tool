import React, { useState, useCallback } from 'react';
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
}: InputProps) => {
  const [userInput, setUserInput] = useState(value);

  const inputChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      e.preventDefault();
      setUserInput(e.target.value);
      onChange(e.target.value);
      onChange({ [name]: e.target.value });
    },
    [userInput]
  );

  return (
    <StyledUserInputWrapper>
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
      />
    </StyledUserInputWrapper>
  );
};

export default Input;
