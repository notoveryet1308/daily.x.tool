import { useImmer } from "use-immer";
import { ProjectFiled } from "../../type";
import { useCheckRequiredValue } from "../../../../hooks";

export const useCreateTicketData = () => {
  const [createTicketData, setCreateTicketData] = useImmer<{
    project: ProjectFiled | null;
    issueType: string | null;
    ticketSummary: string | null;
    ticketDetail: string | null;
    ticketStatus: string | null;
  }>({
    project: null,
    issueType: null,
    ticketSummary: null,
    ticketDetail: null,
    ticketStatus: null,
  });

  const [allowAction] = useCheckRequiredValue({
    values: [!!createTicketData.project, !!createTicketData.issueType],
    type: "and",
  });

  return { createTicketData, setCreateTicketData, allowAction };
};
