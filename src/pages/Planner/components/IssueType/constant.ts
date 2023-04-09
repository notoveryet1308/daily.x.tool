import { Airplane, TestTube, BugBeetle } from "phosphor-react";

export const ISSUE_TYPES = {
  FEATURE: "feature",
  TESTING_DEFECT: "testing-defect",
  BUG: "bug",
};

export const ISSUE_TYPE_DATA = {
  [ISSUE_TYPES.FEATURE]: {
    Icon: Airplane,
    label: "Feature",
  },
  [ISSUE_TYPES.TESTING_DEFECT]: {
    Icon: TestTube,
    label: "Testing defect",
  },
  [ISSUE_TYPES.BUG]: {
    Icon: BugBeetle,
    label: "Bug",
  },
};

export const TICKET_ISSUES = [
  ISSUE_TYPES.FEATURE,
  ISSUE_TYPES.TESTING_DEFECT,
  ISSUE_TYPES.BUG,
];
