import dayjs from 'dayjs';

import { CreateTodoValueType, DispatchType } from './types';

export const initialValue: CreateTodoValueType = {
  duration: 0,
  description: '',
  showCommand: false,
};

export const reducer = (
  state: CreateTodoValueType,
  action: DispatchType
): CreateTodoValueType => {
  const { type, payload } = action;
  if (type === 'set-description' && typeof payload === 'string') {
    return { ...state, description: payload };
  }

  if (type === 'set-duration' && typeof payload === 'number') {
    return { ...state, duration: +payload };
  }

  if (type === 'show-command' && typeof payload === 'boolean') {
    return { ...state, showCommand: payload };
  }

  if (type === 'reset') {
    return initialValue;
  }

  return state;
};

export const getDateFormat = (timestamp: number): string => {
  const createdDate = dayjs(timestamp);
  const dateNow = dayjs(Date.now());

  const diff = createdDate.diff(dateNow, 'd');

  let dateFormat = '';

  if (diff === 0) {
    dateFormat = 'Added today';
  } else if (diff < 7) {
    dateFormat = `Added ${diff} day ago`;
  } else if (diff >= 7 && diff < 30) {
    const wk = Math.floor(diff / 7);
    dateFormat = `Added ${wk}wk ago`;
  }

  return dateFormat;
};
