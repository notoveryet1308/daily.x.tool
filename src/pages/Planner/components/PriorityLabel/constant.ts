import {
  ArrowFatLineUp,
  CaretDoubleUp,
  Equals,
  CaretDown,
} from "phosphor-react";

export const PRIORITIES = {
  URGENT: "URGENT",
  MEDIUM: "MEDIUM",
  LOW: "LOW",
  HIGH: "HIGH",
};



export const PRIORITIES_DATA = {
  [PRIORITIES.HIGH]: {
    hexCode: "#A33029",
    label: "High",
    value: PRIORITIES.HIGH,
    Icon: CaretDoubleUp,
  },

  [PRIORITIES.URGENT]: {
    hexCode: "#A33029",
    label: "Urgent",
    value: PRIORITIES.URGENT,
    Icon: ArrowFatLineUp,
  },

  [PRIORITIES.MEDIUM]: {
    hexCode: "#AA7806",
    label: "Medium",
    value: PRIORITIES.MEDIUM,
    Icon: Equals,
  },

  [PRIORITIES.LOW]: {
    hexCode: "#066BC0",
    label: "Low",
    value: PRIORITIES.LOW,
    Icon: CaretDown,
  },
};

export const PRIORITIES_LIST = [
  PRIORITIES.URGENT,
  PRIORITIES.HIGH,
  PRIORITIES.MEDIUM,
  PRIORITIES.LOW,
];
