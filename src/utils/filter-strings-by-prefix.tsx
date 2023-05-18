const filterStringsByPrefix = (array: string[], prefix: string): string[] => {
  if (!prefix) return array;

  const normalizedPrefix = prefix.replace(/\*/g, ".");
  const pattern = `^${normalizedPrefix}.*$`;
  const regex = new RegExp(pattern);

  return array.filter((item) => regex.test(item));
};

export { filterStringsByPrefix };
