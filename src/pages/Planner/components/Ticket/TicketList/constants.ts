export type TicketTableColumnType = { header: string; accessor: string };

export const COLUMNS: TicketTableColumnType[] = [
  {
    header: "Key",
    accessor: "ticketKey",
  },
  {
    header: "Summary",
    accessor: "summary",
  },
  {
    header: "Reporter",
    accessor: "reporter",
  },
  {
    header: "Issue type",
    accessor: "issueType",
  },
  {
    header: "Priority",
    accessor: "priority",
  },
  {
    header: "Status",
    accessor: "status",
  },
  {
    header: "Assignee",
    accessor: "assignee",
  },
  {
    header: "Created",
    accessor: "created",
  },
  {
    header: "Updated",
    accessor: "updated",
  },
];
