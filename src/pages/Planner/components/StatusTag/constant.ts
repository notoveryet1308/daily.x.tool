export const STATUS_TYPE = {
  NOT_STARTED_YET: "not-started-yet",
  TO_DO: "to-do",
  IN_PROGRESS: "in-progress",
  SENT_TO_QA: "sent-to-qa",
  IN_QA_REVIEW: "in-qa-review",
  DONE: "done",
  BLOCKED: "blocked",
  NOT_A_BUG: "not-a-bug",
  DUPLICATE: "duplicate",
};

export const STATUS_TAG_TYPE_DETAIL = {
  [STATUS_TYPE.IN_PROGRESS]: {
    hexCode: "#004AB9",
    label: "IN PROGRESS",
    value: STATUS_TYPE.IN_PROGRESS,
  },
  [STATUS_TYPE.TO_DO]: {
    hexCode: "#5A30CE",
    label: "TO DO",
    value: STATUS_TYPE.TO_DO,
  },
  [STATUS_TYPE.SENT_TO_QA]: {
    hexCode: "#8E6700",
    label: "SENT TO QA",
    value: STATUS_TYPE.SENT_TO_QA,
  },
  [STATUS_TYPE.IN_QA_REVIEW]: {
    hexCode: "#8E6700",
    label: "IN QA REVIEW",
    value: STATUS_TYPE.IN_QA_REVIEW,
  },
  [STATUS_TYPE.DONE]: {
    hexCode: "#438600",
    label: "DONE",
    value: STATUS_TYPE.DONE,
  },
  [STATUS_TYPE.BLOCKED]: {
    hexCode: "#342F44",
    label: "BLOCKED",
    value: STATUS_TYPE.BLOCKED,
  },
  [STATUS_TYPE.NOT_A_BUG]: {
    hexCode: "#342F44",
    label: "NOT A BUG",
    value: STATUS_TYPE.NOT_A_BUG,
  },
  [STATUS_TYPE.DUPLICATE]: {
    hexCode: "#342F44",
    label: "DUPLICATE",
    value: STATUS_TYPE.DUPLICATE,
  },
  [STATUS_TYPE.NOT_STARTED_YET]: {
    hexCode: "#342F44",
    label: "NOT STARTED YET",
    value: STATUS_TYPE.NOT_STARTED_YET,
  },
};

// export type STATUS_TYPE_LIST =
// | STATUS_TYPE.TO_DO
// | STATUS_TYPE.IN_PROGRESS
// | STATUS_TYPE.SENT_TO_QA
// | STATUS_TYPE.IN_QA_REVIEW
// | STATUS_TYPE.DONE
// | STATUS_TYPE.BLOCKED
// | STATUS_TYPE.NOT_A_BUG
// | STATUS_TYPE.DUPLICATE;

export const STATUS_TYPE_DATA = [
  STATUS_TYPE.NOT_STARTED_YET,
  STATUS_TYPE.TO_DO,
  STATUS_TYPE.IN_PROGRESS,
  STATUS_TYPE.SENT_TO_QA,
  STATUS_TYPE.IN_QA_REVIEW,
  STATUS_TYPE.DONE,
  STATUS_TYPE.BLOCKED,
  STATUS_TYPE.NOT_A_BUG,
  STATUS_TYPE.DUPLICATE,
];
