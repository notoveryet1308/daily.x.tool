import { useHistory } from "react-router-dom";

import { TicketFiled } from "../../../type";
import Table from "../../../../../component/UI/Table";
import { StyledTicketList } from "./style";
import { COLUMNS } from "./constants";
import TableHeaderRow from "./TableHeaderRow";
import TableBodyRow from "./TableBodyRow";

const TicketList = ({ ticketData }: { ticketData: TicketFiled[] }) => {
  const history = useHistory();
  const onBodyRowClickHandler = (rowData: TicketFiled) => {
    history.push({
      pathname: `/planner/ticket/${rowData.ticketKey}`,
      state: { ticketId: rowData.id, projectId: rowData.projectId },
    });
  };
  return (
    <StyledTicketList>
      <Table
        columnData={COLUMNS}
        tableData={ticketData}
        onBodyRowClick={onBodyRowClickHandler}
        renderHeaderRow={(headerData) => (
          <TableHeaderRow headerData={headerData} />
        )}
        renderBodyRow={(rowData) => <TableBodyRow bodyRowData={rowData} />}
      />
    </StyledTicketList>
  );
};

export default TicketList;
