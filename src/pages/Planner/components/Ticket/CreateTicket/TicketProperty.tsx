import { DropdownShell } from "../../../../../component/UI/Dropdown";
import { noop } from "../../../../../utils";
import PriorityLabel from "../../PriorityLabel";
import { PRIORITIES_DATA, PRIORITIES_LIST } from "../../PriorityLabel/constant";
import BaseStatusTag from "../../StatusTag";
import { STATUS_TYPE_DATA } from "../../StatusTag/constant";
import { StyledDropdownContentWrapper } from "../style";
import { StyledTicketProperty } from "./style";

const TicketProperty = ({
  ticketStatus,
  ticketPriority,
  onChangeHandler,
}: {
  ticketStatus: string;
  ticketPriority: string;
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
      <DropdownShell
        btnLabel="Select priority"
        btnIcon={null}
        name="ticketPriority"
        dropdownName="Priority"
        selectedContent={
          ticketPriority ? (
            <PriorityLabel type={ticketPriority} onClick={noop} />
          ) : null
        }
        content={
          <StyledDropdownContentWrapper>
            {PRIORITIES_LIST.map((priorityLabel) => (
              <PriorityLabel
                type={priorityLabel}
                onClick={() => {
                  onChangeHandler({
                    value: priorityLabel,
                    field: "ticketPriority",
                  });
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
