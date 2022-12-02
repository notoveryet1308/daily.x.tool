import styled from 'styled-components';

export const StyledModal = styled.div<{ height?: number; width?: number }>`
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .modal-mask-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.modalMaskOverlay};
  }
  .modal-content-wrapper {
    top: 50%;
    left: 50%;
    overflow: hidden;
    min-height: 320px;
    position: absolute;
    border-radius: 8px;
    transform: translate(-50%, -50%);
    height: ${({ height }) => !!height && `${height}px`};
    width: ${({ width }) => (width ? `${width}px` : '500px')};
  }

  .modal-content {
    width: 100%;
    height: 100%;
    display: flex;
    border-radius: 8px;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.primaryBgColor};
    .modal-header {
      width: 100%;
      position: relative;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 16px 24px;
      border-bottom: 1px solid ${({ theme }) => theme.colors.primaryColor};

      .modal-x-icon {
        cursor: pointer;
        font-size: 24px;
        color: ${({ theme }) => theme.colors.primaryTextColor};
      }
    }
    .modal-body {
      padding: 24px;
      overflow-y: auto;
    }

    .modal-footer {
    }
  }
`;

export const StyledModalHeader = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: inherit;
  width: 100%;

  .header-title {
    color: ${({ theme }) => theme.colors.primaryTextColor};
    font-size: ${({ theme }) => theme.fontSize.large2};
    font-weight: 400;
  }
`;

export const StyledModalFooter = styled.footer`
  width: 100%;
  padding: 16px 24px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.tertiaryBgColor};
  gap: 8px;
`;
