import { useEffect } from "react";
import { useImmer } from "use-immer";
import { ProjectFiled, UserFiled } from "../../type";
import { useCheckRequiredValue } from "../../../../hooks";
import { STATUS_TYPE } from "../StatusTag/constant";
import { PRIORITIES } from "../PriorityLabel/constant";
import { useCreateTicket, useGetMyTeamMemberDetail } from "../../graphql";
import { useGetLoggedUserDetail } from "../../../../CommonGQL";
import { nanoid } from "nanoid";

export const useCreateTicketData = () => {
  const loggedInUser = useGetLoggedUserDetail();
  const [createTicketData, setCreateTicketData] = useImmer<{
    project: ProjectFiled | null;
    issueType: string | null;
    ticketSummary: string | null;
    ticketDetail: string | null;
    ticketStatus: string;
    ticketPriority: string;
    ticketAssigneeId: string | null;
    ticketReporter: UserFiled | null;
    ticketCreated: number;
    ticketUpdated: number;
  }>({
    project: null,
    issueType: null,
    ticketSummary: null,
    ticketDetail: null,
    ticketStatus: STATUS_TYPE.NOT_STARTED_YET,
    ticketPriority: PRIORITIES.LOW,
    ticketAssigneeId: null,
    ticketReporter: null,
    ticketCreated: Date.now(),
    ticketUpdated: Date.now(),
  });

  const [allowActionStepOne] = useCheckRequiredValue({
    values: [!!createTicketData.project, !!createTicketData.issueType],
    type: "and",
  });
  const [allowActionPublish] = useCheckRequiredValue({
    values: [!!createTicketData.ticketSummary, !!createTicketData.ticketDetail],
    type: "and",
  });
  const teamMemberDetail = useGetMyTeamMemberDetail();
  const { handleCreateTicket, createTicketState } = useCreateTicket();

  const publishTicketHandler = () => {
    handleCreateTicket({
      id: nanoid(),
      projectId: createTicketData.project?.id as string,
      issueType: createTicketData.issueType as string,
      description: createTicketData.ticketDetail as string,
      status: createTicketData.ticketStatus,
      summary: createTicketData.ticketSummary as string,
      priority: createTicketData.ticketPriority,
      assigneeId: createTicketData.ticketAssigneeId,
      created: createTicketData.ticketCreated,
      updated: createTicketData.ticketUpdated,
      isDraft: false,
    });
  };

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
    allowActionStepOne,
    teamDataLoading: teamMemberDetail.loading,
    teamDataError: teamMemberDetail.error?.message,
    teamMemberData: teamMemberDetail.data?.getMyTeamMemberDetail,
    publishTicketHandler,
    isTicketPublishing: createTicketState.called && createTicketState.loading,
    isTicketPublished:
      createTicketState.called && createTicketState.data?.createTicket,
    allowActionPublish,
  };
};
