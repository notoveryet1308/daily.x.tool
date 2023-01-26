import dayjs from 'dayjs';

import { CreateTodoValueType, DispatchType } from './types';

export const initialValue: CreateTodoValueType = {
  duration: {
    value: null,
    isRequired: false,
    isPresent: false,
  },
  description: {
    value: '',
    isRequired: true,
    isPresent: null,
    errorMessage: 'This field is required.',
  },
};

export const reducer = (
  state: CreateTodoValueType,
  action: DispatchType
): CreateTodoValueType => {
  const { type, payload } = action;
  const { duration, description } = state;
  if (type === 'set-description' && typeof payload === 'string') {
    return {
      ...state,
      description: {
        ...description,
        value: payload,
        isPresent: description['isPresent'] !== null ? !!payload : null,
      },
    };
  }

  if (type === 'set-duration' && typeof payload === 'number') {
    return {
      ...state,
      duration: {
        ...duration,
        value: !!payload ? payload : null,
        isPresent: !!payload,
      },
    };
  }

  if (type === 'filed-validation') {
    return {
      ...state,
      description: {
        ...state.description,
        isPresent: !!state.description.value,
      },
    };
  }

  if (type === 'reset') {
    return initialValue;
  }

  return state;
};

export const getDateFormat = (timestamp: number): string => {
  const createdDate = dayjs(timestamp);
  const dateNow = dayjs(Date.now());

  const diff = dateNow.diff(createdDate, 'd');

  let dateFormat = '';

  if (diff === 0) {
    dateFormat = 'Added today';
  } else if (diff < 7) {
    dateFormat = `Added ${diff} day ago`;
  } else if (diff >= 7 && diff < 30) {
    const wk = Math.floor(diff / 7);
    dateFormat = `Added ${wk} wk ago`;
  }

  return dateFormat;
};

export const isAddedToday = (timestamp: number): boolean => {
  const createdDate = dayjs(timestamp);
  const dateNow = dayjs(Date.now());

  const diff = dateNow.diff(createdDate, 'd');
  return diff === 0 ? true : false;
};

export const shouldShowInToday = ({
  createdOn,
  duration = 0,
  isCompleted,
}: {
  createdOn: number;
  duration: number | null;
  isCompleted: boolean;
}): boolean => {
  const addedToday = isAddedToday(createdOn);

  if (duration) {
    return true;
  }

  return addedToday;
};
