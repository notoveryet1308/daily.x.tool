import { useState } from "react";

import { WarningCircle, Warning, CheckCircle, X } from "phosphor-react";

import { StyledToastWrapper } from "./style";

type ToastType = {
  message: string;
  position: "inline" | "full";
};

const TOAST_ICON = {
  error: <WarningCircle className="warning-circle-icon ph-icon" />,
  warning: <Warning className="warning-circle-icon ph-icon" />,
  success: <CheckCircle className="warning-circle-icon ph-icon" />,
};

const Toast = ({
  type,
  message,
  position='full',
}: {
  type: "error" | "warning" | "success";
  message: string;
  position: "inline" | "full";
}) => {
  const [active, setActive] = useState(true);
  const toastIcon = TOAST_ICON[type];

  if (!active) {
    return null;
  }

  return (
    <StyledToastWrapper className={`toast-${type} toast-${position}`} >
      <div className="toast-content">
        {toastIcon}
        <p title={message} className="toast-message">
          {message}
        </p>
      </div>
      <X
        className="close-icon ph-icon"
        onClick={() => setActive(false)}
      />
    </StyledToastWrapper>
  );
};

export const ErrorToast = ({ message, ...rest }: ToastType) => (
  <Toast type="error" message={message} {...rest}/>
);
export const SuccessToast = ({ message, ...rest }: ToastType) => (
  <Toast type="success" message={message} {...rest}/>
);
export const WarningToast = ({ message, ...rest }: ToastType) => (
  <Toast type="warning" message={message} {...rest}/>
);
