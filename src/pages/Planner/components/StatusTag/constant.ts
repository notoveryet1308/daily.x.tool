export const STATUS_TYPE = {
  IN_PROGRESS: "in-progress",
  TO_DO: "to-do",
  SENT_TO_QA: "sent-to-qa",
  IN_QA_REVIEW: "in-qa-review",
  DONE: "done",
  BLOCKED: "blocked",
  NOT_A_BUG: "not-a-bug",
  DUPLICATE: "duplicate",
};

export const STATUS_TAG_TYPE_DAT = {
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
  [STATUS_TYPE.TO_DO]: {
    hexCode: "#646464",
    label: "BLOCKED",
    value: STATUS_TYPE.BLOCKED,
  },
  [STATUS_TYPE.NOT_A_BUG]: {
    hexCode: "#646464",
    label: "NOT A BUG",
    value: STATUS_TYPE.NOT_A_BUG,
  },
  [STATUS_TYPE.DUPLICATE]: {
    hexCode: "#646464",
    label: "DUPLICATE",
    value: STATUS_TYPE.DUPLICATE,
  },
};
