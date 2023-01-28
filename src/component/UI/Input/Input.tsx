import React, { useState, useCallback, useEffect } from "react";
import { Eye, EyeSlash } from "phosphor-react";
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
  errorBorder,
  showPassword = false,
}: InputProps) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
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

  useEffect(() => {
    if (userInput) {
      onChangeHandler({ [name]: value, field: name });
    }
  }, []);

  return (
    <StyledUserInputWrapper className={wrapperClassName}>
      {label && (
        <p className="user-input-label" title={label}>
          {label}
          {optional && <span className="optional-field">(Optional)</span>}
        </p>
      )}
      <div className="user-input">
        <StyledInput
          type={
            type === "password" && showPassword && isPasswordVisible
              ? "text"
              : type
          }
          value={userInput}
          onChange={inputChangeHandler}
          placeholder={placeholder}
          bordered={bordered}
          name={name}
          onBlur={onBlur || noop}
          isDisabled={!!disabled}
          className={className}
          onFocus={onFocus}
          errorBorder={!!errorBorder}
          isToggelablePassword={type === "password" && showPassword}
        />
        {type === "password" &&
          showPassword &&
          (isPasswordVisible ? (
            <EyeSlash
              className="eye-closed password-icon"
              onClick={() => setPasswordVisible(!isPasswordVisible)}
            />
          ) : (
            <Eye
              className="eye-open password-icon"
              onClick={() => setPasswordVisible(!isPasswordVisible)}
            />
          ))}
      </div>

      {errorMessage && (
        <span className="error-message-input">{errorMessage}</span>
      )}
    </StyledUserInputWrapper>
  );
};

export default Input;
