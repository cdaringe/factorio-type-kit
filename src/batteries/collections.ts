export function filterWhile<T>(
  arr: T[],
  filter: (it: T) => boolean,
  while_: (it: T) => boolean
): T[] {
  const collection: T[] = [];
  for (const v of arr) {
    if (!while_(v)) break;
    if (filter(v)) collection.push(v);
  }
  return collection;
}
