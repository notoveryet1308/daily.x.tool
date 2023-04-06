import React from "react";
import { StyledBaseButton, StyledCreateBtn } from "./style";
import { NavLink } from "react-router-dom";

type ButtonProps = {
  label?: string | React.ReactNode;
  type?: "submit" | "reset" | "button" | undefined;
  onClick: Function;
  variant?: "primary" | "secondary" | "tertiary" | "dashed";
  disabled?: boolean;
  style?: React.CSSProperties;
  className?: string;
  icon?: React.ReactNode;
  isActive?: boolean;
  isRounded?: boolean;
  size?: "default" | "small";
};

const BaseButton = ({
  label,
  type,
  onClick,
  variant,
  disabled,
  style,
  className,
  icon,
  isActive = false,
  isRounded = false,
  size = "default",
}: ButtonProps) => {
  return (
    <StyledBaseButton
      style={style}
      type={type}
      onClick={() => {
        onClick();
      }}
      className={`${variant}-btn ${disabled && "disabled-btn"} ${className}  ${
        isRounded && "rounded"
      } ${size}`}
    >
      {icon} {label}
      {isActive && <span className="active"> </span>}
    </StyledBaseButton>
  );
};

export const PrimaryButton = ({
  label,
  type,
  disabled,
  onClick,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <BaseButton
      type={type}
      label={label}
      variant="primary"
      disabled={disabled}
      onClick={onClick}
      className={className}
      {...rest}
    />
  );
};

export const SecondaryButton = ({
  label,
  type,
  disabled,
  onClick,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <BaseButton
      type={type}
      label={label}
      variant="secondary"
      disabled={disabled}
      onClick={onClick}
      className={className}
      {...rest}
    />
  );
};

export const TertiaryButton = ({
  label,
  type,
  disabled,
  onClick,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <BaseButton
      type={type}
      label={label}
      variant="tertiary"
      disabled={disabled}
      onClick={onClick}
      className={className}
      {...rest}
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
      <span className="btn-label">{label}</span>
      {icon && icon}
    </StyledCreateBtn>
  );
};

export const CreateNavButton = ({
  label,
  to,
  icon,
  className,
}: {
  label: string;
  icon?: React.ReactNode;
  className?: string;
  to: string;
}) => {
  return (
    <NavLink to={to}>
      <StyledCreateBtn className={className}>
        <span className="btn-label">{label}</span>
        {icon && icon}
      </StyledCreateBtn>
    </NavLink>
  );
};
