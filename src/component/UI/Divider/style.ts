import { Divider } from "antd";
import styled from "styled-components";

export const StyledDivider = styled(Divider)`
  && {
    border-color: ${({ theme }) => theme.colors.secondaryGreyColor};
    top: 0;
    height: 100%;
  }
`;
