import React from 'react';
import { StyledBaseButton, StyledCreateBtn } from './style';

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
  onClick: Function;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'dashed';
  disabled?: boolean;
  style?: React.CSSProperties;
  className?: string;
};

const BaseButton = ({
  label,
  type,
  onClick,
  variant,
  disabled,
  style,
  className,
}: ButtonProps) => {
  return (
    <StyledBaseButton
      style={style}
      type={type}
      onClick={() => {
        onClick();
      }}
      className={`${variant}-btn ${disabled && 'disabled-btn'} ${className}`}
    >
      {label}
    </StyledBaseButton>
  );
};

export const PrimaryButton = ({
  label,
  type,
  disabled,
  onClick,
  className,
}: ButtonProps) => {
  return (
    <BaseButton
      type={type}
      label={label}
      variant='primary'
      disabled={disabled}
      onClick={onClick}
      className={className}
    />
  );
};

export const SecondaryButton = ({
  label,
  type,
  disabled,
  onClick,
  className,
}: ButtonProps) => {
  return (
    <BaseButton
      type={type}
      label={label}
      variant='secondary'
      disabled={disabled}
      onClick={onClick}
      className={className}
    />
  );
};

export const CreateButton = ({
  label,
  icon,
  className,
  onClick,
}: {
  label: string;
  icon?: React.ReactNode;
  className?: string;
  onClick: React.MouseEventHandler<HTMLElement>;
}) => {
  return (
    <StyledCreateBtn className={className} onClick={onClick}>
      <span>{label}</span>
      {icon && icon}
    </StyledCreateBtn>
  );
};
