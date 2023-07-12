import { useHistory } from "react-router-dom";

import { TicketFiled } from "../../../type";
import Table from "../../../../../component/UI/Table";
import { StyledTicketList } from "./style";
import { COLUMNS } from "./constants";
import TableHeaderRow from "./TableHeaderRow";
import TableBodyRow from "./TableBodyRow";
import { useScreenWidth } from "../../../../../hooks";
import { breakpoints } from "../../../../../theme/breakpoint";
import MobileTicketCard from "./MobileTicketCard";

const TicketList = ({ ticketData }: { ticketData: TicketFiled[] }) => {
  const [screenWidth] = useScreenWidth();
  const history = useHistory();
  const onBodyRowClickHandler = (rowData: TicketFiled) => {
    history.push({
      pathname: `/planner/ticket/${rowData.ticketKey}`,
      state: { ticketId: rowData.id, projectId: rowData.projectId },
    });
  };

  return (
    <StyledTicketList>
      {screenWidth > breakpoints.TABLET ? (
        <Table
          columnData={COLUMNS}
          tableData={ticketData}
          onBodyRowClick={onBodyRowClickHandler}
          renderHeaderRow={(headerData) => (
            <TableHeaderRow headerData={headerData} />
          )}
          renderBodyRow={(rowData) => <TableBodyRow bodyRowData={rowData} />}
        />
      ) : (
        ticketData.map((ticket) => (
          <MobileTicketCard
            ticketAssignee={ticket.assignee}
            ticketKey={ticket.ticketKey}
            ticketStatus={ticket.status}
            ticketSummary={ticket.summary}
            ticketPriority={ticket.priority}
          />
        ))
      )}
    </StyledTicketList>
  );
};

export default TicketList;
