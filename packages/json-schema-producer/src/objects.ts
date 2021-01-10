export const sortKeys = <T extends Record<string, any>>(o: T): T => {
  const keys = Object.keys(o).sort((a, b) => a.localeCompare(b));
  return keys.reduce((acc, key) => {
    acc[key as keyof T] = o[key];
    return acc;
  }, {} as T);
};
