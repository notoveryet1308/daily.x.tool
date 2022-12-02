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

export type InputProps = {
  value: string;
  type: string;
  placeholder?: string;
  label?: string;
  onChange: Function;
  bordered?: boolean;
  name: string;
  optional?: boolean;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  disabled?: boolean;
  className?: string;
  wrapperClassName?: string;
};
