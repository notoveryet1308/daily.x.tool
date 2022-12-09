import { optionType } from './types';

export const filterFromArrays = ({
  allValues,
  valuesToExclude,
}: {
  allValues: optionType[];
  valuesToExclude: optionType[];
}) => {
  const valuesToExcludeId = valuesToExclude.map((d) => d.id);

  return allValues.filter((d) => {
    if (!valuesToExcludeId.includes(d.id)) {
      return d;
    }
  });
};
