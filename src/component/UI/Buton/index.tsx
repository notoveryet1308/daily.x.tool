import React from 'react';
import { StyledBaseButton } from './style';

enum buttonVariant {
  'default',
  'primary',
  'ghost',
  'dashed',
  'link',
  'text',
}

enum buttonType {
  'button',
  'submit',
  'rest',
  undefined,
}
type ButtonProps = {
  label: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
  onClick?: React.MouseEventHandler<HTMLElement>;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'dashed';
  disabled?: boolean;
};

const BaseButton = ({
  label,
  type,
  onClick,
  variant,
  disabled,
}: ButtonProps) => {
  return (
    <StyledBaseButton
      type={type}
      onClick={onClick}
      className={`${variant}-btn ${disabled && 'disabled-btn'}`}
    >
      {label}
    </StyledBaseButton>
  );
};

export const PrimaryButton = ({ label, type, disabled }: ButtonProps) => {
  return (
    <BaseButton
      type={type}
      label={label}
      variant='primary'
      disabled={disabled}
    />
  );
};
