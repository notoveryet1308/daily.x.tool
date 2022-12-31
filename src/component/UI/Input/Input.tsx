import React, { useState, useCallback, useEffect } from "react";
import { noop, _debounce } from "../../../utils";
import { StyledInput, StyledUserInputWrapper } from "./style";
import { InputProps } from "./types";

const Input = ({
  value,
  type,
  placeholder = "Input here",
  label,
  onChangeHandler,
  bordered = true,
  name,
  optional,
  onBlur,
  disabled,
  className,
  wrapperClassName,
  onFocus,
  errorMessage,
}: InputProps) => {
  const [userInput, setUserInput] = useState(value);

  const inputChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      e.preventDefault();
      const { value } = e.target;
      setUserInput(value);
      // _debounce({
      //   func: () => {
      //     onChange({ [name]: e.target.value });
      //   },
      //   delay: 500,
      // });
      onChangeHandler({ [name]: value, field: name });
    },
    [userInput]
  );
  useEffect(() => {
    if (value !== userInput) {
      setUserInput(value);
    }
  }, [value]);

  return (
    <StyledUserInputWrapper className={wrapperClassName}>
      {label && (
        <p className="user-input-label" title={label}>
          {label}
          {optional && <span className="optional-field">(Optional)</span>}
        </p>
      )}
      <StyledInput
        type={type}
        value={userInput}
        onChange={inputChangeHandler}
        placeholder={placeholder}
        bordered={bordered}
        name={name}
        onBlur={onBlur || noop}
        isDisabled={!!disabled}
        className={className}
        onFocus={onFocus}
      />
      {errorMessage && (
        <span className="error-message-input">{errorMessage}</span>
      )}
    </StyledUserInputWrapper>
  );
};

export default Input;
