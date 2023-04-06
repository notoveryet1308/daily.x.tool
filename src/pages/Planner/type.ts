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
};

export type TicketCommentFiled = {
  id: string;
  description: string;
  owner: UserFiled;
  ticketId: string;
  reaction: string[] | [];
};

export type TicketFiled = {
  id: string;
  summary: string;
  description: string;
  reporter: UserFiled;
  projectId: string;
  isDraft: boolean;
  assignee: UserFiled;
  sprintDate?: number[] | [];
  issueType: string;
  created: number;
  updated: number;
  tags?: TagField[] | [];
  priority: string;
  status: string;
  ticketKey: string;
  lastUpdatedBy: UserFiled;
  project: ProjectFiled;
  comments: TicketCommentFiled[] | [];
};

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
