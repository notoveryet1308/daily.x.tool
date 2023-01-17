import React from "react";

export type TextareaProps = {
  allowClear?: true;
  autoSize?: boolean;
  maxLength?: number;
  showCount?: boolean;
  value: string;
  onPressEnter?: Function;
  placeholder: string;
  rows?: number;
  readOnly?: boolean;
  minHeight?: number;
  label?: string;
  onChange: Function;
  name: string;
  optional?: boolean;
  className?: string;
  wrapperClassName?: string;
};

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  value?: string;
  type: string;
  placeholder?: string;
  label?: string;
  bordered?: boolean;
  name: string;
  optional?: boolean;
  disabled?: boolean;
  className?: string;
  wrapperClassName?: string;
  errorMessage?: string;
  onChangeHandler: Function;
  errorBorder?: boolean;
}
