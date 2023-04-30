import { format } from "date-fns";

import { noop } from "../../../../../utils";
import { TicketFiled } from "../../../type";
import IssueTypeBase from "../../IssueType";
import MemberLabel from "../../MemberLabel";
import PriorityLabel from "../../PriorityLabel";
import BaseStatusTag from "../../StatusTag";
import { StyledTableCell } from "./style";

const TableBodyRow = ({ bodyRowData }: { bodyRowData: TicketFiled }) => {
  return (
    <>
      <td>
        <StyledTableCell>
          {bodyRowData.ticketKey}-{bodyRowData.ticketNumber}
        </StyledTableCell>
      </td>
      <td>
        <StyledTableCell>{bodyRowData.summary}</StyledTableCell>
      </td>
      <td>
        <StyledTableCell>
          <MemberLabel
            name={bodyRowData.reporter?.name}
            avatar={bodyRowData.reporter.avatar}
            onClick={noop}
          />
        </StyledTableCell>
      </td>
      <td>
        <StyledTableCell>
          <IssueTypeBase type={bodyRowData.issueType} onClick={noop} />
        </StyledTableCell>
      </td>
      <td>
        <StyledTableCell>
          <PriorityLabel type={bodyRowData.priority} onClick={noop} />
        </StyledTableCell>
      </td>
      <td>
        <StyledTableCell>
          <BaseStatusTag type={bodyRowData.status} onClick={noop} />
        </StyledTableCell>
      </td>
      <td>
        <StyledTableCell>
          {bodyRowData.assignee ? (
            <MemberLabel
              name={bodyRowData.assignee.name}
              avatar={bodyRowData.assignee.avatar}
              onClick={noop}
            />
          ) : (
            "UNASSIGNED"
          )}
        </StyledTableCell>
      </td>
      <td>
        <StyledTableCell>
          {format(bodyRowData.created, "dd-MM-yyyy")}
        </StyledTableCell>
      </td>
      <td>
        <StyledTableCell>
          {format(bodyRowData.updated, "dd-MM-yyyy")}
        </StyledTableCell>
      </td>
    </>
  );
};

export default TableBodyRow;
