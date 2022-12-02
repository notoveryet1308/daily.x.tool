import React from 'react';
import ReactDom from 'react-dom';
import { X } from 'phosphor-react';

import { StyledModal } from './style';
import ModalHeader from './Header';
import ModalFooter from './Footer';

interface ModalPropsCustom {
  height?: number;
  width?: number;
  children: React.ReactNode;
  open: boolean;
  onClose: Function;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  title: string;
  className?: string;
  showCloseIcon?: boolean;
  style?: React.CSSProperties;
  onOk: Function;
  okBtnLabel?: string;
}

const ModalShell = ({
  children,
  title,
  open,
  height,
  width,
  onClose,
  header,
  footer,
  className,
  showCloseIcon = true,
  style,
  onOk,
  okBtnLabel,
}: ModalPropsCustom) => {
  return (
    <>
      {open && (
        <StyledModal
          aria-label='modal'
          height={height}
          width={width}
          className={`${className} base-modal`}
        >
          <div className='modal-mask-overlay'></div>
          <div role='dailog' className='modal-content-wrapper' style={style}>
            <div className='modal-content'>
              <div className='modal-header'>
                {!header ? <ModalHeader title={title} /> : header}
                {showCloseIcon ? (
                  <X className='modal-x-icon' onClick={() => onClose()} />
                ) : null}
              </div>
              <div className='modal-body'>{children}</div>
              <div className='modal-footer'>
                {!footer ? (
                  <ModalFooter
                    onCancel={onClose}
                    onOk={onOk}
                    okBtnLabel={okBtnLabel}
                  />
                ) : (
                  footer
                )}
              </div>
            </div>
          </div>
        </StyledModal>
      )}
    </>
  );
};

const Modal = (props: ModalPropsCustom) => {
  const elementOnMount = document.getElementById('modal-c') as HTMLDivElement;

  return ReactDom.createPortal(<ModalShell {...props} />, elementOnMount);
};

export default Modal;
