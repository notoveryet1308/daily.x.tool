import React, { useState, useEffect } from "react";
import ReactDom from 'react-dom';

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
  mountOnElement
}: {
  type: "error" | "warning" | "success";
  message: string;
  position: "inline" | "full";
  mountOnElement?: HTMLElement
}) => {
  const [active, setActive] = useState(true);
  const toastIcon = TOAST_ICON[type];

  if (!active) {
    return null;
  }

  const handleActiveState= ()=>{
    setActive(false)
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
        onClick={handleActiveState}
      />
    </StyledToastWrapper>
  );
};

export const ToastShell = (props:{ type: "error" | "warning" | "success";
message: string;
position: "inline" | "full";}) =>{
   const toastEl = document.getElementById('toast-c') as HTMLDivElement;

   useEffect(() => {
      if(props.position === 'full'){
      toastEl.style.display = 'flex';
      toastEl.style.justifyContent='center';
      toastEl.style.top = '66px';
      toastEl.style.left = '50%';
      toastEl.style.width = '100%';
      toastEl.style.height = 'auto';
      toastEl.style.position = 'fixed';
      toastEl.style.transform= 'translateX(-50%)'
      }
    
  }, []);

   return (props.position === 'full' ? 
   ReactDom.createPortal(<Toast {...props} mountOnElement={toastEl}/>, toastEl): 
   <Toast {...props}/>)
}

export const ErrorToast = ({ message, ...rest }: ToastType) => (
  <ToastShell type="error" message={message} {...rest}/>
);
export const SuccessToast = ({ message, ...rest }: ToastType) => (
  <ToastShell type="success" message={message} {...rest}/>
);
export const WarningToast = ({ message, ...rest }: ToastType) => (
  <ToastShell type="warning" message={message} {...rest}/>
);
