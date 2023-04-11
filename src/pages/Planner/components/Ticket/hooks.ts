import { useImmer } from "use-immer";
import { ProjectFiled } from "../../type";
import { useCheckRequiredValue } from "../../../../hooks";

export const useCreateTicketData = () => {
  const [createTicketData, setCreateTicketData] = useImmer<{
    project: ProjectFiled | null;
    issueType: string | null;
  }>({ project: null, issueType: null });

  const [allowAction] = useCheckRequiredValue({
    values: [!!createTicketData.project, !!createTicketData.issueType],
    type: "and",
  });

  return { createTicketData, setCreateTicketData, allowAction };
};
