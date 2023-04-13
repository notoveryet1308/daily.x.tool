import { useImmer } from "use-immer";
import { ProjectFiled } from "../../type";
import { useCheckRequiredValue } from "../../../../hooks";
import { STATUS_TYPE } from "../StatusTag/constant";
import { PRIORITIES } from "../PriorityLabel/constant";

export const useCreateTicketData = () => {
  const [createTicketData, setCreateTicketData] = useImmer<{
    project: ProjectFiled | null;
    issueType: string | null;
    ticketSummary: string | null;
    ticketDetail: string | null;
    ticketStatus: string;
    ticketPriority: string;
  }>({
    project: null,
    issueType: null,
    ticketSummary: null,
    ticketDetail: null,
    ticketStatus: STATUS_TYPE.NOT_STARTED_YET,
    ticketPriority: PRIORITIES.LOW,
  });

  const [allowAction] = useCheckRequiredValue({
    values: [!!createTicketData.project, !!createTicketData.issueType],
    type: "and",
  });

  return { createTicketData, setCreateTicketData, allowAction };
};
