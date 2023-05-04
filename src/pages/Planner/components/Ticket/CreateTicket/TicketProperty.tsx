import { DropdownShell } from "../../../../../component/UI/Dropdown";
import Loader from "../../../../../component/UI/Loader";
import { noop } from "../../../../../utils";
import { UserFiled } from "../../../type";
import MemberLabel from "../../MemberLabel";
import PriorityLabel from "../../PriorityLabel";
import { PRIORITIES_LIST } from "../../PriorityLabel/constant";
import BaseStatusTag from "../../StatusTag";
import { STATUS_TYPE_DATA } from "../../StatusTag/constant";
import { StyledDropdownContentWrapper } from "../style";
import { StyledTicketProperty } from "./style";

const TicketProperty = ({
  ticketStatus,
  ticketPriority,
  onChangeHandler,
  ticketAssigneeId,
  teamMemberData,
  teamMemberDataLoading,
  ticketReporter,
}: {
  ticketStatus: string;
  ticketPriority: string;
  onChangeHandler: Function;
  ticketAssigneeId: string | null;
  teamMemberData: UserFiled[] | null;
  teamMemberDataLoading: boolean;
  ticketReporter: UserFiled | null;
}) => {
  return (
    <StyledTicketProperty>
      <DropdownShell
        btnLabel="Select assignee"
        btnIcon={null}
        name="ticketAssignee"
        dropdownName="Assignee"
        selectedContent={
          ticketAssigneeId ? (
            teamMemberData
              ?.filter((d) => d._id === ticketAssigneeId)
              .map((user) => (
                <MemberLabel name={user.name || ""} avatar={user.avatar} />
              ))
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
                    console.log({ user });
                    onChangeHandler({
                      value: user._id,
                      field: "ticketAssigneeId",
                    });
                  }}
                />
              ))
            )}
          </StyledDropdownContentWrapper>
        }
      />
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
        btnLabel="Select reporter"
        btnIcon={null}
        name="ticketReporter"
        dropdownName="Reporter"
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
