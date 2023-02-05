import React, { useState, useCallback, useEffect } from "react";
import { StyledTextArea, StyledUserInputWrapper } from "./style";
import { TextareaProps } from "./types";

const Textarea = ({
  value,
  autoSize,
  placeholder,
  maxLength,
  showCount,
  rows,
  readOnly,
  minHeight,
  allowClear,
  label,
  onChange,
  name,
  optional,
  className,
  wrapperClassName,
}: TextareaProps) => {
  const [userInput, setUserInput] = useState(value);

  const inputChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
      e.preventDefault();
      setUserInput(e.target.value);
      onChange({ [name]: e.target.value });
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
      onChange({ [name]: value, field: name });
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
      <StyledTextArea
        value={userInput}
        onChange={inputChangeHandler}
        placeholder={placeholder}
        autoSize={autoSize}
        maxLength={maxLength}
        rows={rows}
        readOnly={readOnly}
        showCount={showCount}
        minheight={minHeight}
        allowClear={allowClear}
        name={name}
        className={className}
      />
    </StyledUserInputWrapper>
  );
};

export default Textarea;
