import { useEffect } from "react";
import { useImmer } from "use-immer";
import {
  ProjectFiled,
  TicketFiled,
  UserFiled,
} from "../../type";
import { useCheckRequiredValue } from "../../../../hooks";
import { STATUS_TYPE } from "../StatusTag/constant";
import { PRIORITIES } from "../PriorityLabel/constant";
import {
  useCreateTicket,
  useGetAllProjects,
  useGetMyTeamMemberDetail,
  useGetTicketById,
  useUpdateDropdownFiledTicket,
  useUpdateTextFieldTicket,
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

export const useViewSingleTicket = ({ ticketKey }: { ticketKey: string }) => {
  const getTicketById = useGetTicketById({ ticketKey });
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

export const useUpdateTextFieldSingleTicket = () => {
  const [ticketTextFiled, setTicketTextField] = useImmer<{
    ticketSummary: string;
    ticketDetail: string;
  }>({
    ticketSummary: "",
    ticketDetail: "",
  });

  const onTicketFieldChange = ({
    field,
    value,
  }: {
    field: string;
    value: string;
  }) => {
    setTicketTextField((draft) => {
      draft[field] = value;
    });
  };
  const { handleUpdateTicket, updateTextFiledTicketState } =
    useUpdateTextFieldTicket();
  const [allowTextFieldUpdate] = useCheckRequiredValue({
    values: [!!ticketTextFiled.ticketSummary, !!ticketTextFiled.ticketDetail],
    type: "or",
  });

  const updateTextFiled = (id: string) => {
    handleUpdateTicket({
      id,
      summary: ticketTextFiled.ticketSummary,
      description: ticketTextFiled.ticketDetail,
      updated: Date.now(),
    });
  };

  return {
    allowTextFieldUpdate,
    onTicketFieldChange,
    ticketTextFiled,
    updateTextFiled,
    updateTextFiledTicketState,
  };
};

export const useUpdateDropdownFieldSingleTicket = () => {
  const [dropdownFieldData, setDropdownFieldData] = useImmer<{
    ticketId: string;
    ticketAssigneeId: string;
    ticketStatus: string;
    ticketPriority: string;
  }>({
    ticketId: "",
    ticketStatus: "",
    ticketPriority: "",
    ticketAssigneeId: "",
  });

  const { handleUpdateTicket, updateDropdownFiledTicketState } =
    useUpdateDropdownFiledTicket();

  const onDropdownValueChange = ({
    field,
    value,
  }: {
    field: string;
    value: string;
  }) => {
    setDropdownFieldData((draft) => {
      draft[field] = value;
    });
  };

  const updateTicketId = (id: string) => {
    setDropdownFieldData((draft) => {
      draft["ticketId"] = id;
    });
  };

  useEffect(() => {
    if (dropdownFieldData.ticketId) {
      if (dropdownFieldData.ticketStatus) {
        handleUpdateTicket({
          id: dropdownFieldData.ticketId,
          status: dropdownFieldData.ticketStatus,
        });
      }
      if (dropdownFieldData.ticketAssigneeId) {
        handleUpdateTicket({
          id: dropdownFieldData.ticketId,
          assigneeId: dropdownFieldData.ticketAssigneeId,
        });
      }

      if (dropdownFieldData.ticketPriority) {
        handleUpdateTicket({
          id: dropdownFieldData.ticketId,
          priority: dropdownFieldData.ticketPriority,
        });
      }
    }
  }, [
    dropdownFieldData.ticketAssigneeId,
    dropdownFieldData.ticketPriority,
    dropdownFieldData.ticketStatus,
  ]);

  return { onDropdownValueChange, dropdownFieldData, updateTicketId };
};
