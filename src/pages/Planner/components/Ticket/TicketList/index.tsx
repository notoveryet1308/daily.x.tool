import { TicketFiled } from "../../../type";
import Table from "../../../../../component/UI/Table";
import { StyledTicketList } from "./style";
import { COLUMNS } from "./constants";
import TableHeaderRow from "./TableHeaderRow";
import TableBodyRow from "./TableBodyRow";

const TicketList = ({ ticketData }: { ticketData: TicketFiled[] }) => {
  return (
    <StyledTicketList>
      <Table
        columnData={COLUMNS}
        tableData={ticketData}
        renderHeaderRow={(headerData) => (
          <TableHeaderRow headerData={headerData} />
        )}
        renderBodyRow={(rowData) => <TableBodyRow bodyRowData={rowData} />}
      />
    </StyledTicketList>
  );
};

export default TicketList;
