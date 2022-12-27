import { useState } from "react";

import { WarningCircle, Warning, CheckCircle, X } from "phosphor-react";

import { StyledToastWrapper } from "./style";

type ToastType = {
  message: string;
};

const TOAST_ICON = {
  error: <WarningCircle className="warning-circle-icon ph-icon" />,
  warning: <Warning className="warning-circle-icon ph-icon" />,
  success: <CheckCircle className="warning-circle-icon ph-icon" />,
};

const Toast = ({
  type,
  message,
}: {
  type: "error" | "warning" | "success";
  message: string;
}) => {
  const [active, setActive] = useState(true);
  const toastIcon = TOAST_ICON[type];

  if (!active) {
    return null;
  }

  return (
    <StyledToastWrapper className={`toast-${type}`}>
      <div className="toast-content">
        {toastIcon}
        <p title={message} role="toast-message">
          {message}
        </p>
      </div>
      <X
        className="warning-circle-icon ph-icon"
        onClick={() => setActive(false)}
      />
    </StyledToastWrapper>
  );
};

export const ErrorToast = ({ message }: ToastType) => (
  <Toast type="error" message={message} />
);
export const SuccessToast = ({ message }: ToastType) => (
  <Toast type="success" message={message} />
);
export const WarningToast = ({ message }: ToastType) => (
  <Toast type="warning" message={message} />
);
