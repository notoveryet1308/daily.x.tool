export const prefixCharacter = ({
  data,
  value = '0',
}: {
  data: number | string;
  value?: string;
}): string => {
  const stringifyData = data.toString();
  if (stringifyData.length !== 2) {
    return `${value}${data}`;
  }

  return `${data}`;
};
