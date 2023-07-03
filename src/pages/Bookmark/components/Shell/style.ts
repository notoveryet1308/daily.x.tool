import styled from "styled-components";
import Drawer from "../../../../component/UI/Drawer";
import Modal from "../../../../component/UI/Modal";

export const StyledModal = styled(Modal)`
  && .modal-body {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
`;

export const StyledDrawer = styled(Drawer)`
  .ant-drawer-body {
    padding: 0;
  }
`;
