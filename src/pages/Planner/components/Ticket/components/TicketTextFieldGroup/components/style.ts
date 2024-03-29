import styled from "styled-components";
import Textarea from "../../../../../../../component/UI/Input/TextArea";

export const StyledTicketSummaryInput = styled(Textarea)`
  padding: 12px;
  border: 1px solid transparent;
  background-color: ${({ theme }) => theme.colors.secondaryBgColor};

  &&& .ticket-summary-input {
  }
`;

export const StyledSummaryView = styled.div`
  color: ${({ theme }) => theme.colors.primaryTextColor};
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryGreyColor};
`;
