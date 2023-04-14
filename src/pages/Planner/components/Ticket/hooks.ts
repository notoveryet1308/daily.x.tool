import { useEffect } from "react";
import { useImmer } from "use-immer";
import { ProjectFiled, UserFiled } from "../../type";
import { useCheckRequiredValue } from "../../../../hooks";
import { STATUS_TYPE } from "../StatusTag/constant";
import { PRIORITIES } from "../PriorityLabel/constant";
import { useGetMyTeamMemberDetail } from "../../graphql";
import { useGetLoggedUserDetail } from "../../../../CommonGQL";

export const useCreateTicketData = () => {
  const loggedInUser = useGetLoggedUserDetail();
  const [createTicketData, setCreateTicketData] = useImmer<{
    project: ProjectFiled | null;
    issueType: string | null;
    ticketSummary: string | null;
    ticketDetail: string | null;
    ticketStatus: string;
    ticketPriority: string;
    ticketAssignee: UserFiled | "UNASSIGNED";
    ticketReporter: UserFiled | null;
  }>({
    project: null,
    issueType: null,
    ticketSummary: null,
    ticketDetail: null,
    ticketStatus: STATUS_TYPE.NOT_STARTED_YET,
    ticketPriority: PRIORITIES.LOW,
    ticketAssignee: "UNASSIGNED",
    ticketReporter: null,
  });

  const [allowAction] = useCheckRequiredValue({
    values: [!!createTicketData.project, !!createTicketData.issueType],
    type: "and",
  });
  const teamMemberDetail = useGetMyTeamMemberDetail();

  useEffect(() => {
    if (loggedInUser.data?.getCurrentLoggedInUser) {
      setCreateTicketData((draft) => {
        draft.ticketReporter = loggedInUser.data.getCurrentLoggedInUser;
      });
    }
  }, [loggedInUser.data?.getCurrentLoggedInUser]);

  return {
    createTicketData,
    setCreateTicketData,
    allowAction,
    teamDataLoading: teamMemberDetail.loading,
    teamDataError: teamMemberDetail.error?.message,
    teamMemberData: teamMemberDetail.data?.getMyTeamMemberDetail,
  };
};
