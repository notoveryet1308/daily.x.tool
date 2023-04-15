import { DropdownShell } from "../../../../../component/UI/Dropdown";
import Loader from "../../../../../component/UI/Loader";
import { noop } from "../../../../../utils";
import { UserFiled } from "../../../type";
import MemberLabel from "../../MemberLabel";
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
  ticketAssignee,
  teamMemberData,
  teamMemberDataLoading,
  ticketReporter,
}: {
  ticketStatus: string;
  ticketPriority: string;
  onChangeHandler: Function;
  ticketAssignee: UserFiled | "UNASSIGNED";
  teamMemberData: UserFiled[] | null;
  teamMemberDataLoading: boolean;
  ticketReporter: UserFiled | null;
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
                key={statusType}
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
                key={priorityLabel}
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

      <DropdownShell
        btnLabel="Select assignee"
        btnIcon={null}
        name="ticketAssignee"
        dropdownName="Assignee"
        selectedContent={
          ticketAssignee !== "UNASSIGNED" ? (
            <MemberLabel
              name={ticketAssignee.name || ""}
              avatar={ticketAssignee.avatar}
            />
          ) : (
            <span className="unassigned-label">UNASSIGNED</span>
          )
        }
        content={
          <StyledDropdownContentWrapper>
            {teamMemberDataLoading ? (
              <Loader />
            ) : (
              teamMemberData?.map((user) => (
                <MemberLabel
                  key={user._id}
                  name={user.name || ""}
                  avatar={user.avatar}
                  onClick={() => {
                    onChangeHandler({ value: user, field: "ticketAssignee" });
                  }}
                />
              ))
            )}
          </StyledDropdownContentWrapper>
        }
      />

      <DropdownShell
        btnLabel="Select assignee"
        btnIcon={null}
        name="ticketAssignee"
        dropdownName="Assignee"
        showCaret={false}
        disabled
        selectedContent={
          ticketReporter ? (
            <MemberLabel
              name={ticketReporter.name || ""}
              avatar={ticketReporter.avatar}
            />
          ) : (
            <Loader />
          )
        }
      />
    </StyledTicketProperty>
  );
};

export default TicketProperty;
