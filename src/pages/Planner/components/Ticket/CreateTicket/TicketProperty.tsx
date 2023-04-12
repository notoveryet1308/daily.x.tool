import { DropdownShell } from "../../../../../component/UI/Dropdown";
import { noop } from "../../../../../utils";
import BaseStatusTag from "../../StatusTag";
import { STATUS_TYPE_DATA } from "../../StatusTag/constant";
import { StyledDropdownContentWrapper } from "../style";
import { StyledTicketProperty } from "./style";

const TicketProperty = ({
  ticketStatus,
  onChangeHandler,
}: {
  ticketStatus: string;
  onChangeHandler: Function;
}) => {
  return (
    <StyledTicketProperty>
      <DropdownShell
        btnLabel="Select status"
        btnIcon={null}
        name="ticketStatus"
        dropdownName="Status"
        selectedContent={
          ticketStatus ? (
            <BaseStatusTag type={ticketStatus} onClick={noop} />
          ) : null
        }
        content={
          <StyledDropdownContentWrapper>
            {STATUS_TYPE_DATA.map((statusType) => (
              <BaseStatusTag
                type={statusType}
                onClick={() => {
                  onChangeHandler({ value: statusType, field: "ticketStatus" });
                }}
              />
            ))}
          </StyledDropdownContentWrapper>
        }
      />
    </StyledTicketProperty>
  );
};

export default TicketProperty;
