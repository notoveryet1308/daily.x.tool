import React, { useMemo } from "react";

import { useTable } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./Column";
import { StyledTable } from "./style";

const Table = <T, U>({
  renderBodyRow,
  renderHeaderRow,
  tableData,
  columnData,
}: {
  renderBodyRow: (props: T) => JSX.Element;
  renderHeaderRow: (props: U[]) => JSX.Element;
  tableData: T[];
  columnData: U[];
}) => {
  const columns = useMemo(() => columnData, []);
  const data = useMemo(() => tableData, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <StyledTable {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr
            className="table-header-row"
            {...headerGroup.getHeaderGroupProps()}
          >
            {renderHeaderRow(headerGroup.headers)}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr className="table-body-row" {...row.getRowProps()}>
              {renderBodyRow(row.original)}
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
};

export default Table;
