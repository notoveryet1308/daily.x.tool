import { TicketTableColumnType } from "./constants";
import { StyledHeaderCell } from "./style";

const TableHeaderRow = ({
  headerData,
}: {
  headerData: TicketTableColumnType[];
}) => {
  return (
    <>
      {headerData.map((d) => {
        return (
          <th key={d.header}>
            <StyledHeaderCell>{d.header}</StyledHeaderCell>
          </th>
        );
      })}
    </>
  );
};
export default TableHeaderRow;
