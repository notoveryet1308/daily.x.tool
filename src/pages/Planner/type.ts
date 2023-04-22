export type TagField = {
  id: string;
  label: string;
  value: string;
  userId: string;
};

export type UserFiled = {
  _id: string;
  email: string;
  name?: string;
  profession?: string;
  avatar?: string;
  teamMember?: string[] | [];
  __typename?: string;
};

export type TicketCommentFiled = {
  id: string;
  description: string;
  owner: UserFiled;
  ticketId: string;
  reaction: string[] | [];
};

export type CreateTicketInputType = {
  id: string;
  summary: string;
  description: string;
  projectId: string;
  isDraft: boolean;
  assigneeId: string;
  sprintDate?: number[];
  issueType: string;
  created: number;
  updated: number;
  priority: string;
  status: string;
};

export interface TicketFiled extends CreateTicketInputType {
  tags?: TagField[] | [];
  ticketKey: string;
  lastUpdatedBy: UserFiled;
  project: ProjectFiled;
  comments?: TicketCommentFiled[] | [];
}

export type ProjectCreateInput = {
  id: string;
  name: string;
  projectKey: string;
  description: string;
};

export interface ProjectFiled extends ProjectCreateInput {
  owner: UserFiled;
  tickets?: [];
}
