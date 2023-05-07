import { useEffect } from "react";
import { useImmer } from "use-immer";
import { ProjectFiled, TicketFiled, UserFiled } from "../../type";
import { useCheckRequiredValue } from "../../../../hooks";
import { STATUS_TYPE } from "../StatusTag/constant";
import { PRIORITIES } from "../PriorityLabel/constant";
import {
  useCreateTicket,
  useGetAllProjects,
  useGetMyTeamMemberDetail,
  useGetTicketById,
  useUpdateTicket,
} from "../../graphql";
import { useGetLoggedUserDetail } from "../../../../CommonGQL";
import { nanoid } from "nanoid";

export const useGetMyTeam = () => {
  const teamMemberDetail = useGetMyTeamMemberDetail();
  return {
    teamDataLoading: teamMemberDetail.loading,
    teamDataError: teamMemberDetail.error?.message,
    teamMemberData: teamMemberDetail.data?.getMyTeamMemberDetail,
  };
};

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
    const ticketCountInProject = createTicketData.project?.tickets?.length;
    const currentTicketCount = ticketCountInProject
      ? ticketCountInProject + 1
      : 1;
    const ticketId = createTicketData.project
      ? `${createTicketData.project.projectKey}-${currentTicketCount}`
      : nanoid();

    handleCreateTicket({
      id: ticketId,
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

export const useViewSingleTicket = ({ ticketId }: { ticketId: string }) => {
  const getTicketById = useGetTicketById({ ticketId });
  const getAllProjects = useGetAllProjects();

  let project: ProjectFiled | null = null;

  if (
    getTicketById.data?.getTicketById &&
    getAllProjects.data?.getAllProjects
  ) {
    project = getAllProjects.data?.getAllProjects.filter(
      (project: ProjectFiled) =>
        project.id === getTicketById.data.getTicketById.projectId
    )[0];
  }
  return {
    isTicketDataLoading: getTicketById.loading,
    isProjectDataLoading: getAllProjects.loading,
    isTicketDataError: getTicketById.error?.message,
    isProjectDataError: getAllProjects.error?.message,
    ticketData: getTicketById.data?.getTicketById as TicketFiled | null,
    project,
  };
};

export const useUpdateSingleTicket = () => {
  const { handleUpdateTicket, updateTicketState } = useUpdateTicket();
};
