import { CSSProperties } from "react";

export type TicketTableColumnType = {
  header: string;
  accessor: string;
  style?: CSSProperties;
};

export const COLUMNS: TicketTableColumnType[] = [
  {
    header: "Key",
    accessor: "ticketKey",
  },
  {
    header: "Summary",
    accessor: "summary",
    style: { maxWidth: "200px" },
  },
  {
    header: "Reporter",
    accessor: "reporter",
    style: { minWidth: "120px" },
  },
  {
    header: "Issue type",
    accessor: "issueType",
    style: { minWidth: "120px" },
  },
  {
    header: "Priority",
    accessor: "priority",
    style: { minWidth: "120px" },
  },
  {
    header: "Status",
    accessor: "status",
    style: { minWidth: "120px" },
  },
  {
    header: "Assignee",
    accessor: "assignee",
    style: { minWidth: "120px" },
  },
  {
    header: "Created",
    accessor: "created",
    style: { minWidth: "120px" },
  },
  {
    header: "Updated",
    accessor: "updated",
    style: { minWidth: "120px" },
  },
];
