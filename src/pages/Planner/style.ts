import styled from "styled-components";
import Modal from "../../component/UI/Modal";

export const StyledPlannerPage = styled.section`
  width: 100%;
  position: relative;

  .main-content-wrapper {
    width: 100%;
    display: flex;
    height: 100%;
    justify-content: center;
    padding: 0 60px 20px;
    max-height: calc(100vh - 64px);
    @media (max-width: ${({ theme }) => theme.breakpoints.LARGE_TABLET}px) {
      padding: 0 32px 20px;
      max-height: calc(100vh - 87px);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.MOBILE}px) {
      padding: 0 16px 10px;
    }
  }
  .main-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex: 1;
    gap: 20px;
    position: relative;
    margin-bottom: 40px;
    flex-direction: column;
    max-width: ${({ theme }) => theme.breakpoints.DESKTOP}px;
    @media (max-width: ${({ theme }) => theme.breakpoints.LARGE_MOBILE}px) {
      margin: 0;
    }
  }
`;

export const StyledDrawerTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  .drawer-title-icon {
    font-size: 20px;
  }

  .label {
    color: ${({ theme }) => theme.colors.primaryTextColor};
  }
`;

export const StyledModal = styled(Modal)`
  &&&& .modal-body {
    padding: 0;
    display: flex;
    flex-direction: column;
  }
`;
